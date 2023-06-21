  const express = require('express');
  const cors = require('cors');
  const mongoose = require('mongoose') ;
  const bcrypt = require('bcryptjs');
  const jwt = require('jsonwebtoken');
  const User = require('./models/User.js') ;

  // ================
  const Immobilier = require('./models/Immobilier.js');
  const Transaction =require('./models/Transaction.js');


  // const {
  //   dataUser,
  //   dataImmobilier,
  //   dataTransaction,
  //   dataCategory
  // } = require('./newData/index1.js');

  const clientRoutes = require('./routes/client.js');
  const generalRoutes = require('./routes/general.js');
  const managementRoutes = require('./routes/management.js');
  const salesRoutes = require('./routes/sales.js');

  // =====================


  const  cookieparser= require('cookie-parser');
  const  imageDownlaoder = require('image-downloader')
  const  multer = require('multer');

  const  fs = require('fs');
  require('dotenv').config();
  const app = express() ;

  const Favorite =require('./models/Favorite.js');
  const Categorie = require('./models/Categorie.js');

  // ===========Configration Admin 
  const bodyParser =require('body-parser');
  const helmet = require('helmet');
  const morgan = require('morgan');

  const bcryptSalt = bcrypt.genSaltSync(10) ;

  const jwtSecret = 'dskfjaskdjflksjdflkjasdf' ;

  // data imports 

  // import {dataUser , dataImmobilier , dataTransaction , dataCategory} from "./newData/index.js"; 



  app.use(express.json()) 

  app.use(cookieparser());

  app.use('/uploads', express.static(__dirname+'/uploads'));

  app.use(cors({
      credentials: true,
      origin: 'http://localhost:5173',
    }));

    // ====================================== Admin ==================
    app.use(helmet()) ;
    app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"})) ;
    app.use(morgan("common")) ;
    app.use(bodyParser.json()) ;
    app.use(bodyParser.urlencoded({extended:false})) ;

    /* ROUTES  */

    app.use("/client" , clientRoutes) ;
    app.use("/general" , generalRoutes) ;
    app.use("/management" , managementRoutes) ;
    app.use("/sales" , salesRoutes)


    // ===============================================================
  
  // Immobilier.insertMany(dataImmobilier) ;
  // User.insertMany(dataUser) ;
  // Categorie.insertMany(dataCategory)
    mongoose.connect(process.env.MONGO_URL);

    function getUserDataFromReq(req){
      return new Promise((resolve,reject) => {
          jwt.verify(req.cookies.token, jwtSecret, async (err, userData) => {
      
              if(err) throw err;
              resolve(userData);
          });
          
      });
      
        
      }

  app.get('/test' , (req , res) => {
      res.json('test ok') ;
  }) ;


  app.post('/register' , async (req, res) => {
      const {name , email , password,phoneNumber} = req.body ;

      try {
          const userDoc = await User.create({
          name , 
          email , 
          password:bcrypt.hashSync(password , bcryptSalt) , 
          phoneNumber
          
          

          }) ;
          res.json(userDoc)
      } catch (e) {
          res.status(422).json(e);
      }
  }); 

  //modificaton

  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });

    if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password);

      if (passOk) {
        const token = jwt.sign(
          {
            email: userDoc.email,
            id: userDoc._id,
            role: userDoc.role // Ajoutez le rôle de l'utilisateur au token JWT
          },
          jwtSecret,
          {}
        );
       
        if (userDoc.role === 'user') {
          // Redirigez l'utilisateur vers la route appropriée pour le rôle "user"
           res.cookie('token', token).json({ user: userDoc, redirect: '/' });
          //res.cookie('token', token, { expires: new Date(Date.now() + 86400000) }).json({ user: userDoc, redirect: '/' });

        } else if (userDoc.role === 'admin') {
          // Redirigez l'utilisateur vers la route appropriée pour le rôle "admin"
           res.cookie('token', token).json({ user: userDoc, redirect: '/dashboard' });
          //res.cookie('token', token, { expires: new Date(Date.now() + 86400000) }).json({ user: userDoc, redirect: '/dashboard' });
        } else {
          // Gérez les autres rôles ici si nécessaire
          res.status(403).json('Invalid role');
        }
      } else {
        res.status(422).json('Invalid password');
      }
    } else {
      res.status(404).json('User not found');
    }
    
  });


  
  app.get('/profile',(req,res)=>{
      
      const {token} =req.cookies;

    
      if(token){
          jwt.verify(token, jwtSecret,{}, async (err,userData)=>{
              if(err) throw err;
      
              const{name,email,role,_id} = await User.findById(userData.id) 
              res.json({ name, email,role,_id});
          
          })
      } else {  
          res.json(null);
      }
  });
  app.post('/logout', (req,res) => {
    res.cookie('token', '').json(true);
  });
  

  
  app.post('/upload-by-link', async (req,res)=>{
      const  {link}= req.body;
      const newName = 'photo' + Date.now()+ '.jpg';

      await imageDownlaoder.image({
          url:link,
          dest: __dirname + '/uploads/'+newName,
      });

      res.json(newName);
    });

  const photoMiddleware = multer({ dest: 'uploads' });

  app.post('/upload', photoMiddleware.array('photos', 100), (req, res) => {
      const uploadedFiles = [];
    
      for (let i = 0; i < req.files.length; i++) {
        const { path, originalname } = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext; 
        fs.renameSync(path, newPath);
        uploadedFiles.push(newPath.replace('/uploads/', ''));
        
      }
    
      res.json(uploadedFiles);
    });


    app.post('/places', async (req, res) => {
      const { token } = req.cookies;
      const {
        titre,
        adress,
        addedPhotos,
        description,
        price,
        perks,
        supInfo,
        checkIn,
        checkOut,
        nomberchamber,
        categorie, 
        status,
        rented
      
      } = req.body;
    
      jwt.verify(token, jwtSecret, async (err, userData) => {
        if (err) throw err;
    
        const placeDoc = await Immobilier.create({
          owner: userData.id,
          price,
          titre,
          adress,
          photos: addedPhotos,
          description,
          perks,
          supInfo,
          checkIn,
          checkOut,
          nomberchamber,
          categorie, 
          status,
          rented
          
        });
        res.json(placeDoc);
      });
    });
    
  app.get('/user-places', (req, res) =>{
      const { token } = req.cookies;
      jwt.verify(token, jwtSecret, async (err, userData) => {
          const {id} =userData;
          res.json(await Immobilier.find({owner:id}));
      });

  });
  app.get('/places/:id', async (req,res)=>{

      const {id}  = req.params ;

      res.json(await Immobilier.findById(id)) ;


  });

  app.put('/places/', async (req,res)=>{

      const { token } = req.cookies;
      const {
        id, titre,
          adress,
          addedPhotos,
          description,
          perks,
          supInfo,
          checkIn,
          checkOut,
          nomberchamber,
          price,
          categorie,
          status
      } = req.body;
  
  jwt.verify(token, jwtSecret, async (err, userData) => {
    if(err)throw err;
  const placeDoc= await Immobilier.findById(id);

      if(userData.id === placeDoc.owner.toString()){
      
          placeDoc.set({

              titre,
              adress,
            photos:addedPhotos,
              description,
              perks,
              supInfo,
              checkIn,
              checkOut,
              nomberchamber,
              price,
              categorie   ,
              status  
              

          });

        await placeDoc.save();
          res.json('ok');
      }
  });

  });

  // app.get('/places', async (req, res) => {
  //   res.json(await Immobilier.find().populate('categorie')); 
  // });
  // app.get('/places', async (req,res) =>{
  //     res.json(await Immobilier.find());
  // });

  app.get('/places', async (req, res) => {
    try {
      const immobiliers = await Immobilier.find({ status: 'accepter' }).populate('categorie');
      res.json(immobiliers);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  });
  

  app.delete('/places/:id', async (req, res) => {
      const placeId = req.params.id;
    
      try {
        // Supprimer la place
        const deletedPlace = await Immobilier.findOneAndDelete({ _id: placeId });
    
        if (!deletedPlace) {
          // Si la place n'a pas été trouvée avec l'ID donné
          return res.status(404).json({ error: 'Place non trouvée.' });
        }
    
        // Mettre à jour les réservations qui font référence à cette place
        await Favorite.deleteMany({ place: placeId });

    
        // Suppression réussie, renvoie une confirmation
        res.json({ message: 'Place supprimée avec succès.' });
      } catch (error) {
        // En cas d'erreur lors de la suppression de la place ou de la mise à jour des réservations
        res.status(500).json({ error: 'Erreur lors de la suppression de la place.' });
      }
    });   

  app.post('/bookings' , async (req,res) =>{
      const userData = await getUserDataFromReq(req);
      const {
          place , 
      } = req.body
      Favorite.create({
          place, 
          user:userData.id,
      }).then((doc) =>{
          
          res.json(doc);
      }).catch((err)=> {
      throw err;
      });
  });

  // app.get('/bookings', async (req ,res) => {
  //     const userData = await getUserDataFromReq(req);
  // res.json( await Favorite.find({user:userData.id})?.populate('place'));
  // });


  app.post('/categories' , async (req, res) => {
      const {name} = req.body ;

      try {
          const userDoc = await Categorie.create({
          name  

          }) ;

          res.json(userDoc)
      } catch (e) {
          res.status(422).json(e);
      }
  }); 


  app.get('/categories', async (req, res) => {
      const categories = await Categorie.find();
      res.json(categories);
    });


    app.get('/places', (req, res) => {
      const searchAddress = req.query.address;
    
      Immobilier.find({ address: searchAddress })
        .then(places => {
          res.json(places);
        })
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: 'Erreur lors de la recherche' });
        });
    });
    
    app.put('/places/:id/markplace', async (req, res) => {
      const placeId = req.params.id;
    
      try {
        // Vérifier l'authentification de l'utilisateur
        const { token } = req.cookies;
        const userData = jwt.verify(token, process.env.JWT_SECRET);
    
        // Récupérer la place à marquer
        const place = await Immobilier.findById(placeId);
    
        if (!place) {
          return res.status(404).json({ error: 'Place non trouvée.' });
        }
    
        // Vérifier si l'utilisateur est le propriétaire de la place
        if (place.owner.toString() !== userData.id) {
          return res.status(403).json({ error: "Vous n'êtes pas autorisé à marquer cette place." });
        }
    
        // Mettre à jour l'état de la place
        place.rented = true;
        await place.save();
    
        res.json({ message: 'La place a été marquée comme louée.' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors de la mise à jour de la place.' });
      }
    });
    
    app.post('/general/favorites', async (req, res) => {
      const userData = await getUserDataFromReq(req);
      const { place } = req.body;
    
      try {
        const favorite = await Favorite.create({
          place,
          user: userData.id
        });
    
        res.json(favorite);
      } catch (err) {
        res.status(500).json({ error: 'Failed to store the favorite.' });
      }
    });
    
    app.get('/general/favorites', async (req, res) => {
      const userData = await getUserDataFromReq(req);

      try {
        const favorites = await Favorite.find({ user: userData.id }).populate('place');
        res.json(favorites);
      } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve favorites.' });
      }
});


// app.get('account/bookings/:favoriteId', async (req, res) => {
  
//     const favoriteId = req.params.favoriteId;
//     try {
//       const favorite = await Favorite.findById(favoriteId);
//       if (!favorite) {
//         // Handle case when favorite is not found
//         return null;
//       }

//       const place = await Immobilier.findById(favorite.place);
//       if (!place) {
//         // Handle case when place is not found
//         return null;
//       }
  
//       return place;
//     } catch (error) {
//       // Handle any errors that occur during the process
//       console.error(error);
//       throw error;
//     }
  

// });

app.get('/api/bookings', async (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  const userData = await getUserDataFromReq(req);
  res.json( await Favorite.find({user:userData.id}).populate('place') );
});



  app.listen(4000,()=>console.log('listening to port 4000'));

