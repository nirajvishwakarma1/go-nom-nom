import React from "react";
import ClassComponent2 from "./ClassComponent2";

class ClassComponent1 extends React.Component {
  constructor(props) {
    super(props);
    console.log("CC1 constructor");
  }

  componentDidMount() {
    console.log("CC1: componentDidMount");
  }

  componentDidUpdate() {
    console.log("CC1: componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("CC1: componentWillUnmount");
  }

  render() {
    const data = {
      name: "Niraj Vishwakarma",
      age: 33,
      skills: ["Node.js", "React", "MongoDB", "MySQL", "JS", "PHP"],
    };
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            ClassComponent 1
          </h1>
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              <tr className="border-b border-gray-300 align-top">
                <td className="p-3 font-semibold text-gray-700 align-top">
                  Name:
                </td>
                <td className="p-3 text-gray-600 align-top">
                  {this.props.name}
                </td>
              </tr>
              <tr className="border-b border-gray-300 align-top">
                <td className="p-3 font-semibold text-gray-700 align-top">
                  Email:
                </td>
                <td className="p-3 text-gray-600 align-top">
                  niraj.vishwa369@gmail.com
                </td>
              </tr>
              <tr className="align-top">
                <td className="p-3 font-semibold text-gray-700 align-top">
                  Data:
                </td>
                <td className="p-3 text-gray-600 align-top">
                  <ClassComponent2
                    data={data}
                    email="niraj.vishwa369@gmail.com"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ClassComponent1;
