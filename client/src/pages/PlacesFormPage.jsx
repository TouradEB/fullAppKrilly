
// import { useEffect, useState } from "react";
// import PhotosUploader from "../PhotosUploader";
// import Perks from "../Perks";
// import axios from "axios";
// import AccountNav from "../AccountNav";
// import { Navigate, useParams } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// export default function PlacesFormPage(){
//     const {id} =useParams();
    
//     const [titre, setTitre]= useState('');

//     const [adress , setAdress]= useState('');
//     const [addedPhotos, setAddedPhotos] = useState([]);
    
//     const [description , setDescription ] = useState(''); 
//     const  [perks, setPerks]= useState('');
//     const [supInfo , setSupInfo] = useState('');
//    const [checkIn ,setCheckIn]= useState('');
//    const [checkOut, setChexkOut]= useState('');
//    const [nomberchamber, setNomberchamber] = useState(1);
//    const [price ,setPrice] = useState(100);
//    const [redirect,setRedirect] = useState(false);
//   const  [selectedCategory, setSelectedCategory] = useState('')
//    const [categories, setCategories] = useState([]);
   

//    useEffect(() => {
//     axios.get('/categories')
//       .then(response => {
//         setCategories(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching categories:', error);
//       });
//   }, []);
//   const { t } = useTranslation();


//    useEffect(()=>{
//     if(!id){
//         return;
//     }
//    axios.get('/places/'+id).then (response =>{
//     const {data} =response;
//     setTitre(data.titre);
//     setAdress(data.adress);
//     setAddedPhotos(data.photos);
//     setDescription(data.description);
//     setPerks(data.perks);
//     setSupInfo(data.supInfo);
//     setCheckIn(data.checkIn);
//     setChexkOut(data.checkOut);
//     setNomberchamber(data.nomberchamber);
//     setPrice(data.price);
//     setSelectedCategory(data.categorie)



//    }

//    )


//    },[id]);

//    function inputHeader(text){
//     return (
//         <h2 className="text-2xl mt-4">{text}</h2>
//     )
//    }
//     function inputDescription(text){
//         return(
//             <p className="text-gray-500 text-sm">{text} </p>

//         )
//     }
//      function preInput(hearder, description ){
//         return(
//             <> {
//              inputHeader(hearder)}
//               {inputDescription (description)}
//               </>
//         )
//      }

//    async  function savePlace(ev){
//     ev.preventDefault(); 
//     const  placeData = { 
//          titre ,adress, addedPhotos ,
//         description,perks, supInfo ,
//         checkIn , checkOut , nomberchamber,price,
//         categorie: selectedCategory
//     };
//     if(id){
//         await axios.put('/places',{
//            id,
//            ...placeData
          
//     });
//     setRedirect(true);
   
//     }else{
//         await axios.post('/places',placeData );

//     setRedirect(true);
   
//     }
          
        
       
//      }

//      if(redirect){
//         return <Navigate to={'/account/places'} />
//      }

//     return (
//         <div>  
//             <AccountNav /> 
//         <form   onSubmit={savePlace}>
//             {preInput (t('titre le titre de votre lieu doit etre court et accrocheur comme dans le pubilicte'))}
           

//            <input type="text" placeholder={t('titre, par exemple : mon bel appartement')} value={titre}  onChange={ev=>setTitre(ev.target.value)} className="border-black"/>

//            { preInput(t('adress', 'adresse a ces lieux'))}

           
//            <input type="text" placeholder={t('adress')} value={adress} onChange={ev=>setAdress(ev.target.value)}  className="border-black"/>

//            { preInput(t('Images', 'plus = mieux'))}
             
//            <PhotosUploader addedPhotos={addedPhotos}  onChange={setAddedPhotos}/>
//            <div className="mt-4 border border-black p-4 flex rounded-2xl gap-2 w-fit ">
//             <select className="" value={selectedCategory} onChange={ev => setSelectedCategory(ev.target.value)}>
//                 <option value="">{t('Sélectionnez une catégorie')}</option>
//                 {categories.map(category => (
//                     <option key={category._id} value={category._id}>{t(category.name)}</option>
//                 ))}
//             </select>
//            </div>

           
//              {preInput(t('Description','description du lieu '))}
          
//            < textarea value={description} onChange={ev=>setDescription(ev.target.value)} className="border-black" />
//            {preInput(t('avantage','selectionner tous les avantages de votre logement'))}
         
          
//            <div className="grid  mt-2 gap-2 p-2 grid-cols-3  md:grig-cols-3 lg:grid-cols-3">
            
//             <Perks selected={perks} onChange={setPerks} />
//            </div>
          
//            <h2 className="text-2xl mt-4 ">{t('information supplementaire')}</h2>
//            <p className="text-gray-500 text-sm">{t('regles de la maision, ect ')} </p>
//            <textarea value={supInfo}  onChange={ev=>setSupInfo(ev.target.value)} className="border-black"/>
            
           
//            <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
           
//             <div>
//              <h3 className="mt-2 -mb-1">{t(' nomber de chamber')}</h3>
//             <input type="number"value={nomberchamber} onChange={ev=>setNomberchamber(ev.target.value)}  className="border-black"/ >
//             </div>

//             <div>
//              <h3 className="mt-2 -mb-1"> {t('price per night')}</h3>
//             <input type="number" value={price} onChange={ev=>setPrice(ev.target.value)} className="border-black" / >
//             </div>
          
           
//                 <button className="primary my-4">{t('Save')}</button>
          
        
//            </div>
//         </form>
//         </div>
//     );
// }



// ==================15/6 


import { useEffect, useState } from "react";
import PhotosUploader from "../PhotosUploader";
import Perks from "../Perks";
import axios from "axios";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function PlacesFormPage() {
  const { id } = useParams();

  const [titre, setTitre] = useState('');
  const [adress, setAdress] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState('');
  const [supInfo, setSupInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setChexkOut] = useState('');
  const [nomberchamber, setNomberchamber] = useState(1);
  const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const { t } = useTranslation();

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/places/' + id).then(response => {
      const { data } = response;
      setTitre(data.titre);
      setAdress(data.adress);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setSupInfo(data.supInfo);
      setCheckIn(data.checkIn);
      setChexkOut(data.checkOut);
      setNomberchamber(data.nomberchamber);
      setPrice(data.price);
      setSelectedCategory(data.categorie);
    });
  }, [id]);

  function inputHeader(text) {
    return (
      <h2 className="text-2xl mt-4">{text}</h2>
    );
  }

  function inputDescription(text) {
    return (
      <p className="text-gray-500 text-sm">{text}</p>
    );
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function savePlace(ev) {
    ev.preventDefault();
    const placeData = {
      titre, adress, addedPhotos,
      description, perks, supInfo,
      checkIn, checkOut, nomberchamber, price,
      categorie: selectedCategory
    };
    if (id) {
      await axios.put('/places', {
        id,
        ...placeData
      });
      setRedirect(true);
    } else {
      await axios.post('/places', placeData);
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/account/places'} />;
  }

  return (
    <div>
      <AccountNav />
      <form onSubmit={savePlace}>
        {preInput(t('titre le titre de votre lieu doit etre court et accrocheur comme dans le pubilicte'))}
        <input
          type="text"
          placeholder={t('titre, par exemple : mon bel appartement')}
          value={titre}
          onChange={ev => setTitre(ev.target.value)}
          className="border-black"
        />

        {preInput(t('adress', 'adresse a ces lieux'))}
        <input
          type="text"
          placeholder={t('adress')}
          value={adress}
          onChange={ev => setAdress(ev.target.value)}
          className="border-black"
        />

        {preInput(t('Images', 'plus = mieux'))}
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        <div className="mt-4 border border-black p-4 flex rounded-2xl gap-2 w-fit">
          <select
            className=""
            value={selectedCategory}
            onChange={ev => setSelectedCategory(ev.target.value)}
          >
            <option value="">{t('Sélectionnez une catégorie')}</option>
            {categories.map(category => (
              <option key={category._id} value={category._id}>{t(category.name)}</option>
            ))}
          </select>
        </div>

        {preInput(t('Description', 'description du lieu '))}
        <textarea
          value={description}
          onChange={ev => setDescription(ev.target.value)}
          className="border-black"
        />

        {preInput(t('avantage', 'selectionner tous les avantages de votre logement'))}
        <div className="grid mt-2 gap-2 p-2 grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
          <Perks selected={perks} onChange={setPerks} />
        </div>

        <h2 className="text-2xl mt-4 ">{t('information supplementaire')}</h2>
        <p className="text-gray-500 text-sm">{t('regles de la maision, ect ')}</p>
        <textarea
          value={supInfo}
          onChange={ev => setSupInfo(ev.target.value)}
          className="border-black"
        />

        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 -mb-1">{t(' nomber de chamber')}</h3>
            <input
              type="number"
              value={nomberchamber}
              onChange={ev => setNomberchamber(ev.target.value)}
              className="border-black"
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">{t('price per night')}</h3>
            <input
              type="number"
              value={price}
              onChange={ev => setPrice(ev.target.value)}
              className="border-black"
            />
          </div>
          <button className="primary my-4">{t('Save')}</button>
        </div>
      </form>
    </div>
  );
}
