import {
  FaQuestionCircle,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="header mx-5">
      <div className="logo">
        <Link to="/">All In One News Place</Link>
      </div>
      <ul>
        <li>
          <Link to="/weather">Weather</Link>
        </li>
        {user && (
          <>
            <li>
              <Link to="/addnews">AddNews</Link>
            </li>
            <li>
              <Link to="/postednews">Posted</Link>
            </li>
          </>
        )}
      </ul>
      <ul>
        {user ? (
          <>
            <li>
              <Link to="/userprofile" className="">
                <FaQuestionCircle /> View Profile
              </Link>
            </li>
            <li>
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Header;
