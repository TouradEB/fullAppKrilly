
import {  useState } from "react";
import { useTranslation } from "react-i18next";


export default function PlaceGallery ({place}){


    const [showAllPhotos, setShowAllPhotos] = useState(false);
    const {t} = useTranslation();

    
if(showAllPhotos){
    return(
        <div className="absolute inset-0 bg-black text-white   min-h-screen ">
            <div className=" bg-black  p-8 grid gap-4 ">
                <div>
                    <h2 className="texy-3xl mr-36 ">{t('Photos  of')} {place.titre}</h2>
                    <button  onClick={() => setShowAllPhotos(false)} className=" fixed  right-12  top-8 flex gap-1  py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black ">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                   {t('Close photos')}
                        </button>
                </div>
            {place?.photos?.length > 0 && place.photos.map(photo => (
            <div key={place.id}>
                <img  src={'http://localhost:4000/'+photo} alt=""/>
            </div>
        ))}
            </div>
       
        </div>
    )
}
    return (

        <div className="relative">
        <div className="grid  gap-2  grid-cols-[2fr_1fr] rounded-3xl overflow-hidden ">
 <div>
    {place.photos?.[0] && (
        <div>
<img  onClick={()=> setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover" src={'http://localhost:4000/'+place.photos[0]} alt="" />
        </div>
      
    )}
 </div>
 <div className="grid ">
 {place.photos?.[1] && (
        <img onClick={()=> setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover" src={'http://localhost:4000/'+place.photos[1]} alt="" />
    )}
    <div className=" overflow-hidden">
    {place.photos?.[2] && (
        <img onClick={()=> setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover relative top-2" src={'http://localhost:4000/'+place.photos[2]} alt="" />   
    )}
    </div>
     
 </div>
</div>
<button onClick={ () => setShowAllPhotos(true)}  className=" flex  gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow  sgadow-gray-500">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

   {t('voir toutes les images')}
    </button> 
</div>

    )
}