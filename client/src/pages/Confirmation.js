import '../styles/confirm.css'

const Confirmation = () => {
    return (
        <div className='confirm-container'>
            <div className="info-user connexion-form card">
                <div>
                Votre commande est bien prise en compte.<br/>
                 Vous allez recevoir un email de confirmation<br/>
                 Merci et à bientôt.
                </div>
                <img src="../../logo.png" alt="logo entreprise" />
            </div>

        </div>
    );
};

export default Confirmation;