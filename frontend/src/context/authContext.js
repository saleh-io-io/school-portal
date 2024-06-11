import { createContext, useReducer , useEffect} from 'react';


const AuthContext = createContext();

const reducer = (state, action) => {

    switch(action.type){
        case 'LOGIN':
            return {
                user: action.payload
            }
        case 'LOGOUT':
            return {
                
                user: null
            }
        default:
            return null
    }

}

const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {user : null});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if(user){
            dispatch({
                type: 'LOGIN',
                payload: user
            })
        }
    },[] );

    console.log(" User Context state: ", state);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthContext, AuthProvider }