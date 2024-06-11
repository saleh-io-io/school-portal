import { useAuthContext } from "./userAuthContext";


const useLogout = () => {
    const { dispatch } = useAuthContext();


  const logout = () => {

    //remove the user from storage
    localStorage.removeItem("user");
    
    //dispatch the logout action
    dispatch({ type: "LOGOUT" });
  };

  return {logout};
}

export { useLogout };   