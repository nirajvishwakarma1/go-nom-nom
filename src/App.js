import React, { lazy, Suspense, useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantCards from "./components/RestaurantCards.js";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails.js";
import Offline from "./components/Offline.js";
import Test from "./components/Test";
import ClassComponent1 from "./components/ClassComponent1.js";
import ClassComponent2 from "./components/ClassComponent2";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

const Grocery = lazy(() => import("./components/Grocery.js"));

const App = () => {
  const [userInfo, setUserInfo] = useState({
    loggedInUser: { name: "Guest User" },
  });
  let userData = useContext(UserContext);
  useEffect(() => {
    setUserInfo(userData);
  }, []);

  if (!useOnlineStatus()) return <Offline />;

  return (
    <Provider store={appStore}>
      {/* Context Provider */}
      <UserContext.Provider value={userInfo}>
        {/* Nested Context Provider with different value is also possible. */}
        <UserContext.Provider
          value={{ loggedInUser: { name: "Neeraj Shree" } }}
        >
          <Header />
        </UserContext.Provider>

        {/* Rest of the Components */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <RestaurantCards /> },
      { path: "/about", element: <About name="About" /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<p className="text-center">Loading...</p>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/privacy", element: <Privacy /> },
      { path: "/terms", element: <Terms /> },
      { path: "/restaurant/:id", element: <RestaurantDetails /> },
      { path: "/test", element: <Test /> },
      { path: "/cc1", element: <ClassComponent1 name="CC1" /> },
      {
        path: "/cc2",
        element: (
          <ClassComponent2
            data={{
              name: "Neeraj Shree",
              age: 32,
              skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
            }}
            email="neerajshree.dev@gmail.com"
          />
        ),
      },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: (
      <>
        <Header />
        <Error />
        <Footer />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
