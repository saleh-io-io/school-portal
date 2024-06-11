import {useState} from 'react';
import {useAuthContext} from './userAuthContext';


const useSignUp = () => {
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const {dispatch} = useAuthContext();

    const signUp = async ({email, password, role, name}) => {
        setLoading(true);
        setError(null);

        const response = await fetch('http://localhost:5000/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, role, name})

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

return {error, loading, signUp};
}
export {useSignUp}