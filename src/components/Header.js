import React from "react";
import logo from "../assets/images/logo.png";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useState, useEffect } from "react";
import { Link, useAsyncError } from "react-router";

const navs = ["Home", "About", "Services", "Contact"];

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const [isNavOpen, setIsNavOpen] = useState(false);

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
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                onClick={() =>
                  setButtonName(buttonName === "Login" ? "Logout" : "Login")
                }
              >
                {buttonName}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
