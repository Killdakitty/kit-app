import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav>
      <Link to="/allrecipes">All Recipes</Link>
      &nbsp; | &nbsp;
      <Link to="/recipes/new">New Recipe</Link> 
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>{" "}
      
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
      &nbsp; | &nbsp;
      <Link to='/settings'>Settings</Link> &nbsp; | &nbsp;

    </nav>
  );
}

export default NavBar;
