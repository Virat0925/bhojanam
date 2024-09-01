import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


function Header() {
  const [logBtn, setLogBtn] = useState("Login");

  const logBtnHandler = () => {
    logBtn === "Login" ? setLogBtn("Logout") :setLogBtn ("Login");
  };

  const onlineStatus = useOnlineStatus();

  // console.log(onlineStatus)
  return (
    <div className="header">
      <img className="logo" src=".\logo.jpg" alt=""></img>

      <div className="nav-items">
        <ul>
          <li>Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          
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
