import {useState} from 'react';
import {useAuthContext} from './userAuthContext';


const useLogin = () => {
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const {dispatch} = useAuthContext();

    const login = async ({email, password, role, }) => {
        setLoading(true);
        setError(null);

        const response = await fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, role})

    } );

    const json = await response.json();

    if(!response.ok){
        setError(json.message);
        setLoading(false);
        return;
    }

    if(response.ok){
    localStorage.setItem('user', JSON.stringify(json));

    dispatch({type: 'LOGIN', payload: json});

    setLoading(false);
    }

}

return {error, loading, login: login};
}
export {useLogin }