// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import AdressLink from "../AdressLink";
// import PlaceGallery from "../PlaceGallery";
// import BookingDates from "../BookingDates";

// export default function BookingPage(){
//     const {id} = useParams();
//     const  [booking , setBooking] = useState(null)
//     useEffect(()=>{

//         if(id){
//             axios.get(`account/bookings/${id}`).then(response =>{

//            const foundBooking=  response.data.find(({_id}) =>_id===id);

//             if(foundBooking){
//                 setBooking(foundBooking);
//             }

            
//             });

//         }
//     },[id])

//     if(!booking)
//    {
//      return '';
//     }


//     return(
             
//              <div className="my-8 ">
                
//              <h1 className="text-3xl " > {booking.place.titre} </h1> 

//              <AdressLink className='my-2 block'> {booking.place.adress} </AdressLink>

//              <div className="bg-gray-200 p-6  my-6  rounded-2xl flex items-center justify-between">

//                 <div>

//                 <h2 className="text-2xl mb-4">your booking information </h2>

//                 <BookingDates booking={booking} />

//                 </div>
//                <div className="bg-primary p-6 text-white rounded-2xl">

//                 <div>total price</div>

//                <div className="text-3xl"> ${booking.price}</div>
//                </div>
//              </div>
//              <PlaceGallery place={booking.place} />
             
//              </div>
//     );
// }


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetImmobilierByPlaceQuery } from "../dashboard/state/api";
import AdressLink from "../AdressLink";
import PlaceGallery from "../PlaceGallery";
// import BookingDates from "../BookingDates";

export default function BookingPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  const { data: place } = useGetImmobilierByPlaceQuery(id); // Use the useGetImmobilierByPlaceQuery hook

  useEffect(() => {
    if (place) {
      setBooking({ place });
    }
  }, [place]);

  if (!booking) {
    return null; // Return null instead of an empty string
  }

  return (
    <div className="my-8">
      <h1 className="text-3xl">{booking.place.titre}</h1>
      <AdressLink className="my-2 block">{booking.place.adress}</AdressLink>
      <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-4">Your booking information</h2>
          {/* <BookingDates booking={booking} /> */}
        </div>
        <div className="bg-primary p-6 text-white rounded-2xl">
          <div>Total price</div>
          <div className="text-3xl">${booking.place.price}</div>
        </div>
      </div>
      <PlaceGallery place={booking.place} />
    </div>
  );
}
