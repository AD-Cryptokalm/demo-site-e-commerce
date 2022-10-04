import React, { useContext } from "react";
import { AuthContext } from "../components/AppContext";
import UpdateProfil from "../components/UpdateProfil";
import Accueil from "../pages/Accueil";

const Profil = () => {
  const uid = useContext(AuthContext);
  return (
    <>
      {uid ? (
        <div>
          <UpdateProfil />
        </div>
      ) : (
        <Accueil />
      )}
    </>
  );
};

export default Profil;
