import Logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div>
        <div className="identity">
          <div className="LogoDiv">
            <img className="logo" src={Logo} alt="logo" />
          </div>
          <h4 className="title">Astro'Trek</h4>
        </div>
      </div>

      <ul className="Nav_Links">
        <li>
          <Link path="/" className="NavLink">
            Accueil
          </Link>
        </li>
        <li>
          <Link path="/" className="NavLink">
            Localisation
          </Link>
        </li>

        <li>
          <Link path="/" className="NavLink">
            AboutUs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
