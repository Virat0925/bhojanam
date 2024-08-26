import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [logBtn, setLogBtn] = useState("Login");

  const logBtnHandler = () => {
    logBtn === "Login" ? setLogBtn("Logout") :setLogBtn ("Login");
  };
  return (
    <div className="header">
      <img className="logo" src=".\logo.jpg" alt=""></img>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button className="auth-btn" onClick={logBtnHandler}>
              {logBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
