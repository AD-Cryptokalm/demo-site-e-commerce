import Categorie from "../components/Product/Categorie";
import Message from "../components/Message";
import Slider from "../components/slider";
import '../styles/accueil.css'


const Accueil = () => {
    return (
        <div className="accueil-container">
        <Categorie/>
        <Message/>
        <Slider/>
        </div>
    );
};

export default Accueil;