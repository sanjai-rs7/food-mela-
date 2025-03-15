import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // Subscribe to the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-[#EB5A3C] h-24 w-auto p-2">
      <div className="w-20 border-2 border-black 2 hover:border-4 rounded-xl">
        <img className="" src={LOGO_URL}></img>
      </div>
      <div className="font-medium">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online : {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4 hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:text-white">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:text-white">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button
            className="px-5 border-black border-2 bg-[#DF9755] rounded-lg hover:pointer  hover:text-white"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
