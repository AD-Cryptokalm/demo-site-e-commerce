import Categorie from "../components/Product/Categorie";
import Message from "../components/Message";
import Slider from "../components/slider";
import '../styles/accueil.css'
import Galerie from "../components/Galerie";


const Accueil = () => {
    return (
        <div className="accueil-container">
        <Categorie/>
        <Galerie/>
        {/* <Slider/> */}
        </div>
    );
};

export default Accueil;