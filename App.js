import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import RestaurantLists from "./RestaurantList";
import Footer from "./Footer";
import data from "./sample-restaurants-data";

const App = () => (
  <>
    <Header />
    <RestaurantLists data={data} />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
