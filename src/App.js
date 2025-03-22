import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import RestaurantLists from "./components/RestaurantList";
import Footer from "./components/Footer";
import restaurants from "./utils/mockData";

const App = () => (
  <>
    <Header />
    <RestaurantLists restaurants={restaurants} />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
