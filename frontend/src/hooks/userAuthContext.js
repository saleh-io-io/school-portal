import { AuthContext } from "../context/authContext";
import { useContext } from 'react';



const useAuthContext = () => {

    const context = useContext(AuthContext);

    if(context === undefined){
        throw new Error("useAuthContext must be used within a AuthProvider");
    }

    return context;
}

export { useAuthContext};