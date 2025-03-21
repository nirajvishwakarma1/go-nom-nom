import React from "react";
import ReactDOM from "react-dom/client";

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

const tech = <span>React</span>;
const adj = "fast";
const menuItems = ["Home", "About Us", "Services", "Contact Us"];

const branding = (
  <>
    <h1 tabIndex="1">
      🙏 Namaste {tech}
    </h1>
    <p>
      {tech} is {adj} 🐇
    </p>
  </>
);

// 👉 React Component
// - Class Components
// - Functional Components

// 🟢 Functional Component
const Header = () => (
  <header className="header" tabIndex="5">
    <div className="container">
      <div className="branding">{branding}</div>
      <ul>
        {menuItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
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

root.render(<MainComponent />)
