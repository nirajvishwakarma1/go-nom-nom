import React, { useState, useEffect, useContext } from "react";
import logo from "../assets/images/logo.png";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { Link } from "react-router";
import UserContext from "../utils/UserContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const navs = ["Home", "About", "Services", "Contact"];

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const data = useContext(UserContext);
  const { loggedInUser } = data;
  const loggedIn = !!loggedInUser;
  const nameArr = loggedInUser.name.split(" ");
  const nameInitials = `${nameArr[0][0].toUpperCase()}${nameArr[
    nameArr.length - 1
  ][0].toUpperCase()}`;

  // Subscribing to out store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems:", cartItems);

  //   const [loggedInUser] = data;

  // If not dependency array ==> useEffect is called on every render
  // If dependency array is empty ==> useEffect is called on initial render once.
  // If dependency array is [buttonName] ==> useEffect is called on initial render and everytime btnName is updated.
  useEffect(() => {
    console.log("uesEffect called");
  }, [buttonName]);

  const onlineStatus = useOnlineStatus();

  return (
    <header className="bg-gray-300 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <img src={logo} alt="Go Nom Nom" className="h-8" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden p-2 text-gray-700"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute top-16 left-0 w-full bg-gray-300 p-4 md:static md:w-auto md:p-0 md:flex ${
            isNavOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:gap-4 text-lg">
            {navs.map((nav, index) => (
              <li key={index}>
                <Link
                  to={`/${nav
                    .toLowerCase()
                    .replace(" ", "-")
                    .replace("home", "")}`}
                  className="hover:text-blue-600"
                >
                  {nav}
                </Link>
              </li>
            ))}
            <li className="mt-1">
              <Link
                to="/grocery"
                className="relative px-4 py-1 bg-green-500 text-white font-bold rounded-full 
                      hover:bg-green-600 transition-transform transform hover:scale-105"
              >
                Grocery
              </Link>
            </li>
            <li>
              <Link to="/cart" className="font-bold">
                {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
                <FontAwesomeIcon icon={faShoppingCart} /> ({cartItems.length})
              </Link>
            </li>
            <li>
              {loggedIn ? (
                <div className="flex items-center gap-2 bg-blue-500 text-white p-3 rounded-full shadow-lg">
                  {/* Online Status Indicator */}
                  <span
                    className={`w-3 h-3 rounded-full ${
                      onlineStatus ? "bg-green-500" : "bg-red-500"
                    }`}
                  />

                  {/* Profile Icon / Name Initials */}
                  <div className="w-10 h-5 flex items-center justify-center bg-white text-blue-500 font-bold rounded-full">
                    {nameInitials}
                  </div>
                </div>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                  onClick={() =>
                    setButtonName(buttonName === "Login" ? "Logout" : "Login")
                  }
                >
                  {buttonName}
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
