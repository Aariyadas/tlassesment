import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../components/context/auth";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <nav className="menu">
      <div className="menu__brand">
        <h1>Brand Name</h1>
      </div>
      <div>
        <ul className="menu__list">
        <li className="menu__item">
            <Link to="/" className="menu__link">
              Home
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/shop" className="menu__link">
               Shop
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/categories" className="menu__link">
              Categories
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/categories" className="menu__link">
              Cart
            </Link>
          </li>
          {!auth?.user ? (
            <>
              <li className="menu__item">
                <Link to="/login" className="menu__link">
                  login
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/register" className="menu__link">
                  register
                </Link>
              </li>
            </>
          ) : (
            <div className="dropdown">
              <li>
                <button
                  className="nav-link pointer dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {auth?.user?.name?.toUpperCase()}
                </button>

                <ul className="dropdown-menu">
                  
                  <li className="menu__item">
                    <Link to onClick={logout} className="menu__link">
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
