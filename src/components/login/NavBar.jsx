import Logo from "./../../assets/boussole.png";
import LoginLogo from "./../../assets/LoginLogo.png";
import { User } from "./../../data/User";
import LogoutLogo from "./../../assets/LogoutLogo.png";

const NavBar = () => {
  const user = User;
  const token = localStorage.getItem("token");
  return (
    <nav className="navBar">
      <div>
        <div className="identity">
          <div className="LogoDiv">
            <img className="logo" src={Logo} alt="logo" />
          </div>
          <h4 className="title">Travel'Earth</h4>
        </div>
      </div>

      <ul className="Nav_Links">
        <li>
          <a href="/" className="NavLink">
            Accueil
          </a>
        </li>
        <li>
          <a href="/localisations" className="NavLink">
            Localisations
          </a>
        </li>
        <li>
          <a href="/favorite" className="NavLink">
            Favoris
          </a>
        </li>
        <li>
          <a href="/profil" className="NavLink">
            Profil
          </a>
        </li>
        <li>
          <a href="/" className="NavLink">
            À propos
          </a>
        </li>
        <li>
          {token ? (
            <a href="/profil">
              <img
                src={user[0].imgUrl}
                alt="ProfilePicture"
                className="LogoutLogo"
              />
            </a>
          ) : (
            <a href="/Login">
              <img src={LoginLogo} alt="Login" className="LoginLogo" />
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
