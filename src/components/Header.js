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
    <div className=" bg-[#FE5005] flex justify-between ">
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

          <li className="m-4 px-2  text-[#FE5005] bg-gray-100 border-2 rounded-3xl">
            <button
              onClick={logBtnHandler}
            >
              {logBtn}
            </button>
          </li>
          <li>
            <button className="p-4 font-extrabold text-2xl">⋮</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
