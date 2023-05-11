import Logo from "./../../assets/boussole.png";
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
          <a href="/" className="NavLink">
            Accueil
          </a>
        </li>
        <li>
          <a href="/" className="NavLink">
            Localisation
          </a>
        </li>

        <li>
          <a href="/" className="NavLink">
            AboutUs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
