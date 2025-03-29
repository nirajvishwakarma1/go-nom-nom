import React from "react";
import UserContext from "../utils/UserContext";

// Class based component
class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
      count2: 2,
      count3: 3,
    };
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  render() {
    const { name } = this.props;
    const { count1, count2, count3 } = this.state;

    const lorem =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return (
      <div className="py-8 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{name}</h2>
        <h3>
          Loggedin User:
          <UserContext.Consumer>
            {(data) => ` ${data.loggedInUser.name}`}
          </UserContext.Consumer>
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          {Array(5).fill(lorem).join(" ")}
        </p>

        <p className="text-xl text-gray-700">Count1: {count1}</p>
        <p className="text-xl text-gray-700">Count2: {count2}</p>
        <p className="text-xl text-gray-700">Count3: {count3}</p>
        <button
          className="mt-4 px-5 py-2 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition"
          onClick={() => {
            this.setState({
              count1: count1 + 1,
              count2: count2 + 1,
            });
          }}
        >
          Increase count
        </button>
      </div>
    );
  }
}

export default About;
