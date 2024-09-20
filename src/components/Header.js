import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../utils/images/logo.png";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


function Header() {
  const [logBtn, setLogBtn] = useState("Login");

  const logBtnHandler = () => {
    logBtn === "Login" ? setLogBtn("Logout") :setLogBtn ("Login");
  };

  const cartItems = useSelector((store) => store.cart.items )

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext)
  
  return (
    <div className=" bg-[#FE5005] flex justify-between shadow-xl ">
      <img className="w-28 opacity-60" src={logo} alt=""></img>

      <div className="flex items-center font-bold font-sans text-lg text-white  ">
        <ul className="flex ">
          <li className="p-4">Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>

          <li className="p-4">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="p-4 text-lg">
            <Link to="/cart">
              🛒: {cartItems.length}</Link>
          </li>

          <li className="m-4 px-2 pt-[3px] text-sm text-[#FE5005] bg-gray-100 border-2 rounded-3xl">
            <Link to="/authentication">
              <button onClick={logBtnHandler}>{logBtn}</button>
            </Link>
          </li>
          <li className="p-4">{data.loggedIn}</li>
          <li>
            <button className="p-4 font-extrabold text-2xl">⋮</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
