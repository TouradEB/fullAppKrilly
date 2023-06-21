import {  useEffect, useState } from "react";
import {differenceInCalendarDays} from 'date-fns';
import { differenceInCalendarMonths } from 'date-fns';
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UserContext } from "./UserContext";


// export default function BookingWidget({place}){
//     const [checkIn ,setCheckIn] = useState('');
//     const [checkOut, setCheckOut] = useState('');
//    const [categories, setCategories] = useState([]);

//     // const [nomberdechamber,setNomberdechamber] = useState('');
//     // const [name,setName] = useState('');
//     // const [phone ,setPhone] = useState('');
//     const [redirect,setRedirect ] = useState('');
//     const {t} = useTranslation();
//     // const {user} = useContext(UserContext);

//     //  useEffect(() => {

//     //     if(user){
//     //         setName(user.name);
//     //     }
//     //  }, [user]);
    

//     let numberOfNight = 0;
//     if(checkIn && checkOut){
//         numberOfNight = differenceInCalendarDays(new Date(checkOut) ,new Date(checkIn) );
//     }

//     let numberOfMonths = 0;
// if (checkIn && checkOut) {
//   numberOfMonths = differenceInCalendarMonths(new Date(checkOut), new Date(checkIn));
// }


// async function bookThisPlace(){
    
//     const response =  await  axios.post('/bookings',{
        
//             checkIn, checkOut,
//             //raho hou kant vih nomberdechamber
//             place:place._id,
//             price:numberOfNight * place.price,
//     });
//     const bookingId = response.data._id;
//     setRedirect(`/account/bookings/${bookingId}`); 
          
// }


// async function bookThisPlaceMonthly(){
//     const response = await axios.post('/bookings', {
//         checkIn,
//         checkOut,
//         place: place._id,
//         price: numberOfMonths * place.price,
//       });
//       const bookingId = response.data._id;
//       setRedirect(`/account/bookings/${bookingId}`);
      
// }


// useEffect(() => {
//     axios.get('/categories')
//       .then(response => {
//         setCategories(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching categories:', error);
//       });

//   }, []);

// if(redirect){
//     return <Navigate to={redirect} />
// }

// // const cate = place.categorie ;



// const category = categories.find(category => category._id === place.categorie);




// if(category && category.name === 'apertemant')

// {

//     return(
//         <div className="bg-white shadow   p-4 rounded-2xl">
//                         <div className="text-2xl text-center">
//                         {/* Price:{place.price} UM /per night  */}
                    

//                       {t('Price')}: {place.price} {t('UM')}/{t('par nuit')}
//       {/* {category && <div>{category.name}</div>} */}

//                         {/* {categories.map(category => (
//                     <div key={category._id} value={category._id}>{category.name}</div>
//                 ))} */}
//                         </div>
//                         <div className="border rounded-2xl mt-4">
//                             <div className="flex">
//                             <div className="py-3 px-4 ">
//                             <label>{t('check In:')}</label>
//                             <input type="date" 
//                             value={checkIn} 
//                             onChange={ev => setCheckIn(ev.target.value)}/>
//                         </div>
//                         <div className=" py-3 px-4 border-l ">
//                             <label>{t('check Out:')}</label>
//                             <input type="date"
//                              value={checkOut} 
//                              onChange={ev => setCheckOut(ev.target.value)}/>
//                         </div>
//                         </div>
//                                 {/* <div className=" py-3 px-4 border-t ">
//                                 <label>nomber de chamber:</label>
//                                 <input type="number" 
//                                 value={nomberdechamber} 
//                                 onChange={ev => setNomberdechamber(ev.target.value)}/>

//                         </div> */}
//                         {/* {numberOfNight >0 && (
//                               <div className=" py-3 px-4 border-t ">
//                               <label>your full name:</label>
//                               <input type="text" 
//                               value={name} 
//                               onChange={ev => setName(ev.target.value)}/>

//                             <label>phone number:</label>
//                               <input type="tel" 
//                               value={phone} 
//                               onChange={ev => setPhone(ev.target.value)}/>

//                           </div>
//                         )}; */}
//                         </div>
                      
//                         {/* onClick={bookThisPlace} */}
//                         <button  className="primary mt-4 ">
//                            {t('le prix de cette maison par les mois:')}

//                             {numberOfNight >0  && (
//                            <span> {numberOfNight * place.price} {t('UM')}</span>
//                             )}
//                         </button>
//                     </div>
//     );

// }


//     return(
//         <div className="bg-white shadow   p-4 rounded-2xl">
//                         <div className="text-2xl text-center">
//                         {/* Price:{place.price} UM /per night  */}
                    

//                        {t(" Price")}: {place.price}{t('UM')}/{t('par Mois')}
      

//                         {/* {categories.map(category => (
//                     <div key={category._id} value={category._id}>{category.name}</div>
//                 ))} */}
//                         </div>
//                         <div className="border rounded-2xl mt-4">
//                             <div className="flex">
//                             <div className="py-3 px-4 ">
//                             <label>{t('check In:')}</label>
//                             <input type="date" 
//                             value={checkIn} 
//                             onChange={ev => setCheckIn(ev.target.value)}/>
//                         </div>
//                         <div className=" py-3 px-4 border-l ">
//                             <label>{t('check Out:')}</label>
//                             <input type="date"
//                              value={checkOut} 
//                              onChange={ev => setCheckOut(ev.target.value)}/>
//                         </div>
//                         </div>
//                                 {/* <div className=" py-3 px-4 border-t ">
//                                 <label>nomber de chamber:</label>
//                                 <input type="number" 
//                                 value={nomberdechamber} 
//                                 onChange={ev => setNomberdechamber(ev.target.value)}/>

//                         </div> */}
//                         {/* {numberOfNight >0 && (
//                               <div className=" py-3 px-4 border-t ">
//                               <label>your full name:</label>
//                               <input type="text" 
//                               value={name} 
//                               onChange={ev => setName(ev.target.value)}/>

//                             <label>phone number:</label>
//                               <input type="tel" 
//                               value={phone} 
//                               onChange={ev => setPhone(ev.target.value)}/>

//                           </div>
//                         )}; */}
//                         </div>
                      
//                         {/* onClick={bookThisPlace} */}
//                         <button  className="primary mt-4 ">
//                            {t('le prix de cette maison par les mois:')}

//                             {numberOfMonths >0  && (
//                            <span> {numberOfMonths * place.price} {t('UM')}</span>
//                             )}
//                             </button>
//                     </div>
//     );



   
   
// }



// 15/6 late impoertation .


export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [categories, setCategories] = useState([]);
  const [redirect, setRedirect] = useState('');
  const { t } = useTranslation();

  let numberOfNight = 0;
  if (checkIn && checkOut) {
    numberOfNight = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  }

  let numberOfMonths = 0;
  if (checkIn && checkOut) {
    numberOfMonths = differenceInCalendarMonths(new Date(checkOut), new Date(checkIn));
  }

  async function bookThisPlace() {
    const response = await axios.post('/bookings', {
      checkIn,
      checkOut,
      place: place._id,
      price: numberOfNight * place.price,
    });
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  }

  async function bookThisPlaceMonthly() {
    const response = await axios.post('/bookings', {
      checkIn,
      checkOut,
      place: place._id,
      price: numberOfMonths * place.price,
    });
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  }

  useEffect(() => {
    axios
      .get('/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  const category = categories.find((category) => category._id === place.categorie);

  if (category && category.name === 'apertemant') {
    return (
      <div className="bg-white shadow p-4 rounded-2xl">
        <div className="text-2xl text-center">
          {t('Price')}: {place.price} {t('UM')}/{t('par nuit')}
        </div>
        <div className="border rounded-2xl mt-4">
          <div className="flex flex-col md:flex-row">
            <div className="py-3 px-4">
              <label>{t('check In:')}</label>
              <input type="date" value={checkIn} onChange={(ev) => setCheckIn(ev.target.value)} />
            </div>
            <div className="py-3 px-4 border-l">
              <label>{t('check Out:')}</label>
              <input type="date" value={checkOut} onChange={(ev) => setCheckOut(ev.target.value)} />
            </div>
          </div>
          <button className="primary mt-4" onClick={bookThisPlace}>
            {t('le prix de cette maison par les mois:')}
            {numberOfNight > 0 && <span> {numberOfNight * place.price} {t('UM')}</span>}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">
        {t('Price')}: {place.price} {t('UM')}/{t('par Mois')}
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex flex-col md:flex-row">
          <div className="py-3 px-4">
            <label>{t('check In:')}</label>
            <input type="date" value={checkIn} onChange={(ev) => setCheckIn(ev.target.value)} />
          </div>
          <div className="py-3 px-4 border-l">
            <label>{t('check Out:')}</label>
            <input type="date" value={checkOut} onChange={(ev) => setCheckOut(ev.target.value)} />
          </div>
        </div>
        <button className="primary mt-4" onClick={bookThisPlaceMonthly}>
          {t('le prix de cette maison par les mois:')}
          {numberOfMonths > 0 && <span> {numberOfMonths * place.price} {t('UM')}</span>}
        </button>
      </div>
    </div>
  );
}
