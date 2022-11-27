import Categorie from "../components/Product/Categorie";
import '../styles/accueil.css'
import Galerie from "../components/Galerie";


const Accueil = () => {
    return (
        <div className="accueil-container">
        <Categorie/>
        <Galerie/>
        </div>
    );
};

export default Accueil;