// const express = require('express');
// const { Router } = require('express');
// // import {getProducts  , getCustomers , getTransactions , } from "../controllers/client.js"
// const {
//     getPublication,
//     getUtilisateur,
//     getTransactions,
//     AddUser,
//     FindUser,
//     UpdateUser,
//     DeleteUser,
//     FindAllCategory,
//     AddCategory,
//     UpdateCategory,
//     FindSinlCategory,
//     DeleteCategory ,
//     updateRentedStatus ,
//     // getCategoryName
// } = require('../controllers/client.js');

// const router = express.Router() ;

//  router.get("/annocements" , getPublication) ; 
//  router.get("/utilisateur" , getUtilisateur) ;

// // add user 

// router.post('/utilisateur' , AddUser)

// // find single user 

// router.get('/utilisateur/:id' ,FindUser )

// // // Update user 

// router.put('/utilisateur/:id' ,UpdateUser )

// // // delete 

// router.delete('/utilisateur/:id' , DeleteUser)
// // 

// router.get("/transactions", getTransactions);

// // Category get All

// router.get("/category" ,FindAllCategory)

// // Category get singl

// router.get("/category/:id" ,FindSinlCategory)

// // Category Post

// router.post("/category" ,AddCategory)

// // Category Update

// router.put("/category/:id" ,UpdateCategory)

// // Category Delete

// router.delete("/category/:id" ,DeleteCategory)

// // router.put("/change/:id" ,changeLoue)
// // Category 

// router.put("/immobilier/:id/update-rented-status",updateRentedStatus);



// // router.get('/immobilier/category/:id', getCategoryName);


// module.exports = router;


const express = require('express');
const { Router } = require('express');
// import {getProducts  , getCustomers , getTransactions , } from "../controllers/client.js"
const {
    getPublication,
    getUtilisateur,
    getTransactions,
    AddUser,
    FindUser,
    UpdateUser,
    DeleteUser,
    FindAllCategory,
    AddCategory,
    UpdateCategory,
    FindSinlCategory,
    DeleteCategory , 
    changeToRefuser ,
    changeToAccepter ,
    deleteImmobilier ,
    getTotalImmobiliers ,
    getTotalCategory ,
    getTotalUser , 
    findImmobilierCountByCategory ,

    getImmobilierByPlace , 
    updateRentedStatus , 

    getUserPhoneNumber , 
    getTotalFavorite
    
} = require('../controllers/client.js');

const router = express.Router() ;

router.get("/annocements" , getPublication) ; 


router.put("/annocements/:immobilierId/changeToRefuser" , changeToRefuser) ; 

router.put('/annocements/:immobilierId/changeToAccepter', changeToAccepter);

router.delete('/annocements/:id', deleteImmobilier);


router.get("/utilisateur" , getUtilisateur) ;

// add user 

router.post('/utilisateur' , AddUser)

// find single user 

router.get('/utilisateur/:id' ,FindUser )

// // Update user 

router.put('/utilisateur/:id' ,UpdateUser )

// // delete 

router.delete('/utilisateur/:id' , DeleteUser)
// 

router.get("/transactions", getTransactions);

// Category get All

router.get("/category" ,FindAllCategory)

// Category get singl

router.get("/category/:id" ,FindSinlCategory)

// Category Post

router.post("/category" ,AddCategory)

// Category Update

router.put("/category/:id" ,UpdateCategory)

// Category Delete

router.delete("/category/:id" ,DeleteCategory)
// Category 

router.get('/totalImmobiliers', getTotalImmobiliers);
router.get('/totalCategory', getTotalCategory);

router.get('/totalUser', getTotalUser);

router.get('/TotalFavoriat' ,getTotalFavorite)

router.get('/immobilier/count-by-category' ,findImmobilierCountByCategory ) ;

router.get('/tourad/test/:place' , getImmobilierByPlace)

router.put("/immobilier/:id/update-rented-status",updateRentedStatus);

router.get('/Numero/:id', getUserPhoneNumber);

module.exports = router;