import { useContext } from 'react';
import {AuthContext} from '../components/AppContext';
import Log from '../components/Log/Auth'


export const Connexion = () => {

    const uid = useContext(AuthContext)

    return (
        <div>
            {uid ? (
                <h1>Update</h1>
            ) : (

            <Log/>
            )}
        </div>
    );
};

