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
    <div className="m-1 bg-[#FE5005] flex justify-between shadow-lg">
      <img
        className="w-28"
        src="
        https://static.vecteezy.com/system/resources/thumbnails/023/686/588/small_2x/restaurant-logo-on-letter-b-template-food-on-b-letter-initial-chef-sign-concept-vector.jpg"
        alt=""
      ></img>

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

          <li className="m-4 px-1 border border-solid border-black bg-white text-[#FE5005]">
            <button className="auth-btn" onClick={logBtnHandler}>
              {logBtn}
            </button>
          </li>
          <li className="p-4">
            <button>:</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
