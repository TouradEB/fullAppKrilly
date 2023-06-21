import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function RegisterPage() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [phoneNumber, setPhoneNumber]= useState('');
  const { t } = useTranslation();

  async function registerUser(ev) {
    ev.preventDefault();
    try {
        await axios.post('/register', {
          
          name,
          email,
          password,
          phoneNumber
        });
        alert (t('Registration successful. Now you can log in'));
      } catch (e) {
        alert(t('Registration failed. Please try again later'));
      }
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">{t("Register")}</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input type="text"
                 placeholder={t('name')}
                 value={name}
                 onChange={ev => setName(ev.target.value)} />
          <input type="email"
                 placeholder={t('your@email.com')}
                 value={email}
                 onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
                 placeholder="password"
                 value={password}
                 onChange={ev => setPassword(ev.target.value)} />
           <input type="tel" 
                 placeholder="+22246543435"
                  value={phoneNumber}
                   onChange={ev=>setPhoneNumber(ev.target.value)} />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            {t('Already a member ?')} <Link className="underline text-black" to={'/login'}>{t('Login')}</Link>
          </div>
        </form>
      </div>
    </div>
  );
}