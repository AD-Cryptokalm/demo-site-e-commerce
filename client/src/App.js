// import { useState } from 'react';
import Routes from "./components/Routes/index";
import { AuthContext } from "./components/AppContext";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/userAction";
import { useEffect } from "react";


const App = () => {
  // alert("Ceci est un exemple de site e-commerce. Aucune vente ne sera effectuée")
  const dispatch = useDispatch();

  const uid = localStorage.getItem("userId");

  useEffect(() => {

    if (uid) dispatch(getUser(uid));
  })

  return (
    
      <AuthContext.Provider value={uid}>
        <Routes />
      </AuthContext.Provider>
    
  );
};

export default App;
