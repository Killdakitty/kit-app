import { Link } from "react-router-dom";
import { logOut } from "../../utilities/users-service";
import styles from "../NavBar/NavBar.module.css"

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav className={styles.NavBar}>
       <span>Welcome, {user.name}</span>{" "}
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      {/* &nbsp; | &nbsp; */}
      <Link to="/allrecipes">All Recipes</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
      <Link to="/recipes/new">New Recipe</Link> 

     
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
      <Link to='/settings'>Settings</Link> 
      
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
     <Link to="" onClick={handleLogOut}>
       Logout
     </Link>

    </nav>
  );
}

export default NavBar;
