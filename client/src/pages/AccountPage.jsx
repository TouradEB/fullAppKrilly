

import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate ,useParams} from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";
import { useTranslation } from "react-i18next";




// export default function AccountPage(){
//     const {redirect,setRedirect} = useState(null);
//     const {ready,user,setUser} = useContext(UserContext);

//     let {subpage} = useParams();
//     if(subpage === undefined){
//         subpage ='profile';
//     }

//    async  function logout() {
//     await axios.post('/logout');
   
//     setUser(null);
//     setRedirect('/');


//     }
//     const { t } = useTranslation();

// if(!ready){
//     return 'loading...';
// }

//     if(ready && !user && !redirect){
//         return <Navigate to={'/'} />
//     }

   
  

//    if(redirect){
//     return <Navigate to={redirect} />
//    }
    
 
//     return (
//         <div>
//          <AccountNav />
           
//           {subpage === 'profile' && (
//             <div className=" text-center max-w-lg mx-auto"> 
//                 {t('loged in as')} {user.name} ({user.email})<br />

//                <button onClick={logout} className="primary max-w-sm mt-2">{t('logout')}</button>
//             </div>
//           )}
//             {subpage === 'places' && (
//                <PlacesPage />
//             )}
//         </div>
//     );
// }

//=========================== 15/6


export default function AccountPage() {
    const { redirect, setRedirect } = useState(null);
    const { ready, user, setUser } = useContext(UserContext);
  
    let { subpage } = useParams();
    if (subpage === undefined) {
      subpage = 'profile';
    }
  
    async function logout() {
      await axios.post('/logout');
  
      setUser(null);
      setRedirect('/');
  
    }
    const { t } = useTranslation();
  
    if (!ready) {
      return 'loading...';
    }
  
    if (ready && !user && !redirect) {
      return <Navigate to={'/'} />;
    }
  
    if (redirect) {
      return <Navigate to={redirect} />;
    }
  
    return (
      <div>
        <AccountNav />
  
        <div className="text-center max-w-lg mx-auto">
          {subpage === 'profile' && (
            <>
              {t('loged in as')} {user.name} ({user.email})<br />
              <button onClick={logout} className="primary max-w-sm mt-2">{t('logout')}</button>
            </>
          )}
          {subpage === 'places' && <PlacesPage />}
        </div>
      </div>
    );
  }
  