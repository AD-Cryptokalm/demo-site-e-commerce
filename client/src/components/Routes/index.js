import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "../../pages/Accueil";
import Bijoux from "../../pages/Bijoux";
import {Connexion} from "../../pages/Connexion";
import Cart from "../../pages/Cart";
import Order from "../../pages/Order";
import NavBar from "../NavBar";
import BraceletPierre from "../../pages/BraceletPierre";
import Divers from '../../pages/Divers'
import Profil from "../../pages/Profil";
import Product from "../../pages/Product"
import Footer from "../Footer"
import Confirmation from "../../pages/Confirmation";

const index = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/" element={<Accueil />} />
        <Route path="/bijoux" element={<Bijoux />} />
        <Route path="/bracelet-pierre" element={<BraceletPierre />} />
        <Route path="/divers" element={<Divers />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default index;
