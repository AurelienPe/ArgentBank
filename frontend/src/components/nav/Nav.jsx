import './nav.css'
import nav_logo from '../../img/argentBankLogo.webp'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav>
      <a href="/">
        <img
          src={nav_logo}
          alt="Argent Bank Logo"
        />
        <h1>Argent Bank</h1>
      </a>
      {!isAuthenticated ? (
        <a href="/login">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
      ) : (
        <ul className="nav-list">
          <li>
            <a
              className="nav-item"
              href="/profile">
              <i class="fa fa-user-circle"></i>
              <p>{user.userName}</p>
            </a>
          </li>
          <li>
            <a href="/" onClick={handleLogout}>
              <i class="fa fa-sign-out"></i>
              <p>Sign Out</p>
            </a>
          </li>
          </ul>
          )}
        </nav>
      )
      }

      export default Nav;
