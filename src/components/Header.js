import { useState } from "react";
function Header() {
  const [logBtn, setLogBtn] = useState("Login");

  const logBtnHandler = () => {
    logBtn === "Login" ? setLogBtn("Logout") :setLogBtn ("Login");
  };
  return (
    <div className="header">
      <img className="logo" src=".\logo.jpg"></img>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
