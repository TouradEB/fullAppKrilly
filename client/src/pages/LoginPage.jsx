import {Link, Navigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import { useTranslation } from "react-i18next";


const LoginPage = () => {
    const [email , setEmail] = useState('') ; 
    const [password  , setPassword] = useState('') ;
    const [redirect ,setRedirect] = useState(false);
     const {setUser} =useContext(UserContext);
     const { t } = useTranslation();

    // async function handleLoginSubmit(ev) {

    //   ev.preventDefault();
    
    //     try { 
       
    //    const {data} = await axios.post('/login' , {email,password} ) ;
    //    setUser(data);

    //         setRedirect(true);
    //         alert(t('login successful'))
    //     }catch (e) {
    //         alert('Login failed') ;

    //       }
    // }

    // if(redirect){
    //   return <Navigate  to={''} />
    // }


   

// ...

async function handleLoginSubmit(ev) {
  ev.preventDefault();

  try {
    const { data } = await axios.post('/login', { email, password });

    setUser(data.user);

    if (data.user.role === 'admin' || data.user.role === 'user') {
      setRedirect(true);
     
      alert(t('login successful'));
    }
  } catch (e) {
    alert('Login failed');
  }
}

if (redirect) {
  return <Navigate to="/" />;
}

// ...

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">{t('Login')}</h1> 
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input type="email"
                 placeholder="your@email.com"
                 value={email}
                 onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
                 placeholder="password"
                 value={password}
                 onChange={ev => setPassword(ev.target.value)} />
          <button className="primary">{t('Login')}</button>
          <div className="text-center py-2 text-gray-500">
          {t("have an account yet?")} <Link className="underline text-black" to={'/register'}>{t('Register now')}</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage
