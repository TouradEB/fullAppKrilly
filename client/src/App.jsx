
import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import RegisterPage from './pages/RegisterPage';
import axios from "axios";
import {  UserContextProvider } from './UserContext';
 import AccountPage from './pages/AccountPage.jsx';
import PlacesPage from './pages/PlacesPage';
import PlacesFormPage from './pages/PlacesFormPage';
import PlacePage from './pages/PlacePage';
import BookingsPage from './pages/BookingsPage';
import BookingPage from './pages/BookingPage';
import LayoutAdmin from './dashboard/scenes/layout'
import Dashboard from './dashboard/scenes/dashboard'
import Annonce from "./dashboard/scenes/annonce";
import Utilisateur from "./dashboard/scenes/utilisateur" ;
import Breakdown from "./dashboard/scenes/breakdown";
import Category from "./dashboard/scenes/category";

import Admin  from "./dashboard/scenes/admin";
axios.defaults.baseURL = 'http://localhost:4000';

axios.defaults.withCredentials=true;


function App() {
  
  
  return (
<UserContextProvider>
      <Routes>
          <Route path="/"   element={<Layout />} >
          <Route index    element={<IndexPage />} />
          <Route path="/login"    element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
           <Route path="/account" element={<AccountPage />} /> 
           <Route path="/account/places" element={<PlacesPage />} /> 
           <Route path="/account/places/new" element={<PlacesFormPage/>} />
           <Route path="/account/places/:id" element={<PlacesFormPage/>} />
           <Route path='/place/:id' element={<PlacePage/>} />
           <Route path='/account/bookings' element={<BookingsPage />} />
           <Route path='/account/bookings/:id' element={<BookingPage/>} />
        </Route>  
        <Route element={<LayoutAdmin />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/annocements" element={<Annonce />} />
          <Route path="/utilisateur" element={<Utilisateur />} />
          <Route path='/breakdown' element={<Breakdown />} />
          <Route path="/category" element={<Category />} />
          <Route path="/admin" element={<Admin />} />

        </Route>
      </Routes>
      </UserContextProvider>
    
  )
}
  
export default App
