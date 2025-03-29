import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: {
    name: "Niraj Vishwakarma",
    email: "niraj.vishwa369@gmail.com",
    city: "Hyderabad",
  },
});

export default UserContext;
