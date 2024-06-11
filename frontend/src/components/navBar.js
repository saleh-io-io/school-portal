
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/userLogout";
import { useAuthContext } from "../hooks/userAuthContext";


const NavBar = () => {

    const {logout} = useLogout();
    const {user} = useAuthContext();

    const handleClick = () => {
        logout();
    }

    return (
        <header>
            <div className="container">
                <Link to={"/"}>
                <h3>School Courses</h3>
                </Link>

                <nav>
                    {user &&(
                    <div>
                        
                    <span>{user.name}</span> &nbsp;
                    <span className="underline_green">{user.role}</span> &nbsp;
                    
                        <button onClick={handleClick}> Log Out </button>
                    </div>

                    )}

                    {!user &&(
                    <div>
                        
                            <Link to={"./login"}>Login</Link>
                        
                        
                            <Link to={"./signUp"}>Sign Up</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default NavBar;