import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";

// 👉 React Element

// React.createElement ==> ReactElement-JS Object ==> HTML Element (render)
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste  React 🚀"
// );

// JSX - it's not HTML inside JS. it's HTML-like or XML-like syntax
// JSX trnspiled before it reaches to the JS engine - Parcel transpile using Babel.
// JSX ==> Babel transpiles it into React.createElement ==> ReactElement-JS Object ==> HTML Element (render)
// const jsxHeading = <h1 className="head" tabIndex="1">Namaste React using JSX 🚀</h1>;
// const jsxHeading = (<h1 className="head" tabIndex="1">Namaste React using JSX 🚀</h1>);

const siteName = <span>NRJ</span>;
const tagLine = "Lorem ipsum dolor";
const menuItems = ["Home", "About Us", "Services", "Contact Us"];
const styleBranding = {
    backgroundColor: "yellow",
    padding: "10px"
};

const Logo = () => <FontAwesomeIcon icon={faHeart} size="2x" />;
const Branding = () => (
  <>
    <div className="logo-wrap">
      <Logo />
      <h1>{siteName}</h1>
    </div>
    <p>{tagLine}</p>
  </>
);

const Search = () => (
  <div className="search-wrap">
    <form action="/search" method="GET">
      <input type="search" name="q" placeholder="Search..." required />
      <button type="submit">Search</button>
    </form>
  </div>
);

const UserIcon = () => (
  <div className="user-wrap">
    <FontAwesomeIcon icon={faUser} size="2x" />
  </div>
);

const Menu = () => (
  <div className="menu">
    <ul>
      {menuItems.map((item) => (
        <li key={item}>
          <a href={"#" + item.toLowerCase().replace(" ", "-")}>{item}</a>
        </li>
      ))}
    </ul>
  </div>
);

// 👉 React Component
// - Class Components
// - Functional Components

// 🟢 Functional Component
const Header = () => (
  <header className="header" tabIndex="5">
    <div className="container header-top">
      <div className="branding-wrap" style={styleBranding}>
        <Branding />
      </div>
      <Search />
      <UserIcon />
    </div>
    <div className="container menu-wrap">
      <Menu />
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">©️ 2025 | Namaste React</div>
  </footer>
);

// 🟢 Component Composition
const MainComponent = () => (
  <>
    <Header />
    <div className="container">
      {console.log("abcd")}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </p>
    </div>
    {/* <Footer></Footer> */}
    {/* {Footer()} */}
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// const app = <MainComponent />
// root.render(app);

root.render(<MainComponent />);
