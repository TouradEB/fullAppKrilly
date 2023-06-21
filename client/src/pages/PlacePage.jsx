
// import { FaWhatsapp } from "react-icons/fa";
// import axios from "axios";
// import {  useContext, useEffect,useState } from "react";
// import { Navigate } from "react-router-dom";

// import { useParams } from "react-router-dom";
// import BookingWidget from "../BookingWidget";
// import PlaceGallery from "../PlaceGallery";
// import AdressLink from "../AdressLink";
// import { UserContext } from "../UserContext";
// import { useTranslation } from "react-i18next";

// export default function PlacePage(){

//     const [redirect,setRedirect ] = useState('');
//     const  {user} = useContext(UserContext);
//     const {t}= useTranslation();

//     const {id}  = useParams();


//     // console.log(user._id)
//     // console.log(id) ;

//     const [place, setPlace] = useState(null);
   
//     useEffect(()=>{
//         if(!id){
//             return;
//         }
//         axios.get(`/places/${id}`).then(response => {
        
//             setPlace(response.data);


//         })
//     },[id])
   
//      if(!place) return '';
       
//     //  async function bookThisPlace() {
//     //     try {
//     //       const response = await axios.post("/favorites", {
//     //         place: place._id,
//     //       });
      
//     //       const favorite = response.data;

      
//     //       // Process the favorite data or perform any necessary actions
//     //       // For example, you can update the user interface to reflect the favorited status,
//     //       // display a success message, or trigger any related functionality.

//     //       console.log("Favorite stored:", favorite); 
//     //       setRedirect(`/account/bookings/${favorite._id}`);
//     //     } catch (error) {
//     //       // Handle error
//     //     }
//     //   }

//     const handleAddToFavorites = async () => {
//         try {
//           const response = await axios.post("/general/favorites", {
//             user: user._id,
//             place: id,
//           });

//           const favorite = response.data;
      
//           if (response.status === 200) {
//             console.log('Place added to favorites successfully.');
//             setRedirect(`/account/bookings/${favorite._id}`);
//           } else {
//             console.error('Failed to add place to favorites.');
//           }
          
//         } catch (error) {
//           console.error('Failed to make the request:', error);
//         }
//       };
      


//     if(redirect){
//         return <Navigate to={redirect} />
//     }
   
//  return(
//     <div> 
       
//              <div className="mt-4  bg-gray-100 -mx-8 px-8  pt-8">
//                <div  className=" flex   rounded-xl p-2">
//                <button   onClick={handleAddToFavorites}>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
//                     </svg>
//                 favorite
//               </button>
//                 </div> 
          
//              <h1 className="text-3xl " > {place.titre} </h1>
               
//              <AdressLink> {place.adress} </AdressLink>
//              <PlaceGallery place={place} />
 
            
//              <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
//                 <div>
//                 <div className="my-4">
//                 <h2 className="font-semibold  text-2xl">{t('Description')}</h2>
//                 {place.description}
//              </div>

                    
                   
//                    {t(' nomber de chamber')}:{place.nomberchamber}<br/>
//                     {t('avantages')} :
//                     {place?.perks?.length > 0 && place.perks.map(perk => (  
//                      <span key={place.id}>
//                     {' ' +perk}
//             </span>
//         ))}
                    
//                 </div>
                
                

//                 <div>
//                     <BookingWidget  place={place}/>
//                 </div>  
                
//              </div>
//              {!!user && (
//                 <div  className= "flex   mb-3 bg-green-400 text-white w-fit overflow-hidden rounded cursor-pointer">
                    
//                     {typeof window !== "undefined" && (
//                     <a
//                         href={`https://wa.me/${user.phoneNumber} `}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         Contacter le proprietaire via WhatsApp {' '+ user.phoneNumber}
//                     </a>
//                     )}
                    
//                     <div className="mt-1  bg-green-400 ml-1"> 
//                         <FaWhatsapp   />
//                     </div>
                    
                    
//                   </div>
// )}
//                 <div className="bg-white -mx-8 px-8 py-8 border-t ">
//                 <div>
//                 <h2 className="font-semibold  text-2xl">information suplementaire</h2>
                 
//              </div>
//              <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">{place.supInfo} </div>   
//                 </div>
                
             
//          </div>
        
//          </div>
  
//     )
// }


// ==========================================================================

import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AdressLink from "../AdressLink";
import { UserContext } from "../UserContext";
import { useTranslation } from "react-i18next";
import {useGetUserPhoneNumberQuery} from "../dashboard/state/api"

export default function PlacePage() {
  const [redirect, setRedirect] = useState('');
  const { user } = useContext(UserContext);
  const { t } = useTranslation();

  const { id } = useParams();

  const [place, setPlace] = useState(null);
  // const { data: phoneNumber } = useGetUserPhoneNumberQuery(place.owner);

  const { data: phoneNumber } = useGetUserPhoneNumberQuery(place?.owner || '');



  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then(response => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return '';



  const handleAddToFavorites = async () => {
  try {
    
    const response = await axios.get("/general/favorites");
    const favorites = response.data;

    const isPlaceFavorited = favorites.some((favorite) => favorite.place._id === id);

    if (isPlaceFavorited) {
      console.log('Place is already favorited.');
      alert('  vous  avez  déjà  ajouté aux favoris Cet  immobiler');
      return;
    }

    const addToFavoritesResponse = await axios.post("/general/favorites", {
      place: id,
    });

    const favorite = addToFavoritesResponse.data;

    if (addToFavoritesResponse.status === 200) {
      console.log('Place added to favorites successfully.');
      setRedirect(`/account/bookings/${favorite.place}`);
    } else {
      console.error('Failed to add place to favorites.');
    }

  } catch (error) {
    console.error('Failed to make the request:', error);
  }
};

if (redirect) {
  return <Navigate to={redirect} />;
}

  

  // const handleAddToFavorites = async () => {
  //   try {
  //     const response = await axios.post("/general/favorites", {
  //       user: user._id,
  //       place: id,
  //     });

  //     const favorite = response.data;

  //     if (response.status === 200) {
  //       console.log('Place added to favorites successfully.');
  //       setRedirect(`/account/bookings/${favorite.place}`);
  //     } else {
  //       console.error('Failed to add place to favorites.');
  //     }

  //   } catch (error) {
  //     console.error('Failed to make the request:', error);
  //   }
  // };

  // if (redirect) {
  //   return <Navigate to={redirect} />;
  // }

 

  return (
    <div>
      {/* <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8"> */}
      <div className="mt-4 bg-gray-100 md:mx-0 md:px-4 lg:px-8 md:pt-4 lg:pt-8">
    
        {/* <div className="flex rounded-xl p-2">
          <button onClick={handleAddToFavorites}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            favorite
          </button>
        </div> */}

        {/* <div className="flex rounded-xl p-2">
        
  <button
    onClick={handleAddToFavorites}
    className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md"
    style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
    favorite
  </button>
</div> */}

{user && (
  <div className="flex rounded-xl p-2">
    <button
      onClick={handleAddToFavorites}
      className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md"
      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
      favorite
    </button>
  </div>
)}



        <h1 className="text-3xl">{place.titre}</h1>

        <AdressLink>{place.adress}</AdressLink>
        <PlaceGallery place={place} />

        <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
          <div>
            <div className="my-4">
              <h2 className="font-semibold text-2xl">{t('Description')}</h2>
              {place.description}
            </div>

            <div>
              <p className="font-semibold">{t('Nombre de chambre')}:</p>
              <p>{place.nomberchamber}</p>
            </div>

            <div>
              <p className="font-semibold">{t('Avantages')}:</p>
              {place?.perks?.length > 0 && place.perks.map(perk => (
                <span key={place.id}>{' ' + perk}</span>
              ))}
            </div>
          </div>

          <div>
            <BookingWidget place={place} />
          </div>
        </div>

   

                  <div className="flex mb-3 rounded cursor-pointer">
         
            <a
              href={`https://wa.me/${phoneNumber} `}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md"
              style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
            >
              <span>{t('Contacter le propriétaire via WhatsApp')}</span>
              <div className="ml-2">
                <FaWhatsapp className="text-xl" />
              </div>
            </a>
    
        </div>

     

        <div className="bg-white -mx-8 px-8 py-8 border-t">
          <div>
            <h2 className="font-semibold text-2xl">{t('Information supplémentaire')}</h2>
          </div>
          <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">{place.supInfo}</div>
        </div>
      </div>
    </div>
  );
}
