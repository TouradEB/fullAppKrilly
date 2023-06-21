

// import { Link} from "react-router-dom";
// import AccountNav from "../AccountNav";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import PlaceImg from "../PlaceImg";
// import { useTranslation } from "react-i18next";
// export default function PlacesPage(){
    
//  const [places,setPlaces] = useState([]);
//  const [placeLoue, setPlaceLoue] = useState(false);

//  const {t} = useTranslation();
    
// useEffect(()=>{
//     axios.get('/user-places').then(({data}) =>{

//         setPlaces(data);
//     });
// },[]);
  
// const deletePlace = (placeId) => {
//   const confirmed = window.confirm(t('are you sure you want to delete this place?'));
  
//   if(confirmed){
//     axios.delete(`/places/${placeId}`)

//     .then(() => {
//         setPlaces(prevPlaces => prevPlaces.filter(place => place._id !== placeId));
//         alert(t('Place supprimée avec succès','ok'));
//     })
//     .catch(error => {
//       console.log(error);
//       alert(t('suppression echoué','ok'));
//     });
//   }
   
//   };




//   const markPlaceLoue = (placeId) => {
//     axios.put(`http://localhost:4000/client/immobilier/${placeId}/update-rented-status`)
//       .then(() => {
//         setPlaceLoue(true);
//       })
//       .catch(error => {
//         console.log(error);
//         alert('Une erreur s\'est produite lors du marquage de la place comme louée.');
//       });
//   };
  
  
  
        
  
//     return(
// <div>
//     <AccountNav />
   

// <div className="text-center" >
   
  
//         <Link className=" inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//         </svg>

//           {t('ajouter un nouvau Immobiliere')}
//             </Link>
           
//     </div>
//     <div className="mt-4  "> 
//   {places.length > 0 && places.map(place => (
    
//     <div className="flex mb-8" key={place.id}>
      
//     <Link to={'/account/places/'+place._id} className=" flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl" key={place.id}>

          
//         <div className="flex  space-between  w-32 h-32 bg-gray-300 grow shrink-0  ">
//             <PlaceImg place={place} />
            
//         </div>
//         <div className="flex-grow-0 flex-shrink">
//         <h2 className="text-xl ">{place.titre}
        
//         </h2>
//         <p className="text-sm mt-2 ">
//         {place.description}

//          </p>
     
//         </div>
      
//     </Link>
//         {placeLoue ? (
//     <span className="text-green-500 ml-4">Loué</span>
//   ) : (
//     // <button className="cursor-pointer absolute text-white bg-primary  rounded-2xl py-2 px-3" >
//     //   {/* onClick={() => markPlaceLoue(place._id)} */}
//     //   Louer
//     // </button>

//   //   <button
//   //   className="cursor-pointer absolute text-white bg-primary rounded-2xl py-2 px-3"
//   //   onClick={() => markPlaceLoue(place._id)}
//   //   disabled={place.rented}
//   // >
//   //   {place.rented ? "Loué" : "Louer"}
//   // </button>

//   <button
//   className={`cursor-pointer absolute text-white py-2 px-3 rounded-2xl ${place.rented ? 'bg-green-500' : 'bg-primary'}`}
//   onClick={() => markPlaceLoue(place._id)}
//   disabled={place.rented}
  
// >
//   {t(place.rented ? "Loué" : "Louer")}
// </button>

  



//   )}
//     <button className="cursor-pointer absolute text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3" onClick={() => deletePlace(place._id)}>
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
//               </svg>
    
//             </button>
            
//     </div>
    
//   ))}
  
   
// </div>

// </div>
//     ) 
// }


// ========================15/6

import { Link } from 'react-router-dom';
import AccountNav from '../AccountNav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PlaceImg from '../PlaceImg';
import { useTranslation } from 'react-i18next';

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);
  const [placeLoue, setPlaceLoue] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    axios.get('/user-places').then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  const deletePlace = (placeId) => {
    const confirmed = window.confirm(t('are you sure you want to delete this place?'));

    if (confirmed) {
      axios
        .delete(`/places/${placeId}`)
        .then(() => {
          setPlaces((prevPlaces) => prevPlaces.filter((place) => place._id !== placeId));
          alert(t('Place supprimée avec succès', 'ok'));
        })
        .catch((error) => {
          console.log(error);
          alert(t('suppression echoué', 'ok'));
        });
    }
  };

  const markPlaceLoue = (placeId) => {
    axios
      .put(`http://localhost:4000/client/immobilier/${placeId}/update-rented-status`)
      .then(() => {
        setPlaceLoue(true);
        window.location.reload(); 
      })
      .catch((error) => {
        console.log(error);
        alert('Une erreur s\'est produite lors du marquage de la place comme louée.');
      });
  };

  return (
    <div>
      <AccountNav />

      <div className="text-center">
        <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          {t('ajouter un nouvau Immobiliere')}
        </Link>
      </div>

      <div className="mt-4 places-container">
        {places.length > 0 &&
          places.map((place) => (
            <div className="place-card relative max-w-300px mx-10" key={place._id}>
              <Link to={'/account/places/' + place._id} className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl">
                <PlaceImg place={place} />
                <div className="place-details flex-grow-1 flex-shrink-0">
                  <h2 className="text-xl">{place.titre}</h2>
                  <p className="text-sm mt-2">{place.description}</p>
                </div>
              </Link>
              <div className="place-buttons absolute bottom-4 right-4 space-x-2">
                {placeLoue ? (
                  <span className="text-green-500">Loué</span>
                ) : (
                  <button
                    className={`cursor-pointer text-white py-2 px-3 rounded-2xl ${place.rented ? 'bg-green-500' : 'bg-primary'}`}
                    onClick={() => markPlaceLoue(place._id)}
                    disabled={place.rented}
                  >
                    {t(place.rented ? 'Loué' : 'Louer')}
                  </button>
                )}
                <button className="cursor-pointer text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3" onClick={() => deletePlace(place._id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

