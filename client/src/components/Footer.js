import "../styles/footer.css"

const footer = () => {
    return (
        <div className="footer">
            <div className="block-footer information">
                <h3>PLUS D'INFORMATIONS</h3>
                <a href="/">Qui sommes nous ?</a>
                <a href="/">Mentions légales</a>
                <a href="/">Politique de confidentialité</a>
            <div className="line"></div>
            </div>
            <div className="block-footer mon-compte">
                <h3>MON COMPTE</h3>
                <a href="/user-order">Mes commandes</a>
                <a href="/profil">Mon profil</a>
            <div className="line"></div>
            </div>
            <div className="block-footer reseaux">
                <h3>NOUS SUIVRE</h3>
                <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
            <div className="line"></div>
            </div>
            <div className="block-footer contact">
                <h3>NOUS CONTACTER</h3>
                <a href="mailto:mon-univers-enchante@gmail.com">mon-univers-enchante@gmail.com</a>
                <a href="#">07.50.49.87.49</a>
            </div>
        </div>
    );
};

export default footer;