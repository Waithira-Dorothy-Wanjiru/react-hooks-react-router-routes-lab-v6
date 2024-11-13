import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/directors" activeClassName="active">Directors</NavLink>
        </li>
        <li>
          <NavLink to="/actors" activeClassName="active">Actors</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
