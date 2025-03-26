import React from "react";
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ClassComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 1,
      count2: 2,
      count3: 3,
    };
    console.log("CC2: constructor");
  }

  componentDidMount() {
    console.log("CC2: componentDidMount");
    this.interval1 = setInterval(() => {
      this.setState({
        count1: this.state.count1 + 1,
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("CC2: componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("CC2: componentWillUnmount");
    clearInterval(this.interval1);
    console.log("interval1 cleared");
  }

  render() {
    console.log(this.state.count1);
    const { count1, count2 } = this.state;
    const {
      data: { name },
      data: { age },
      email,
      data: {
        skills: [skill1, skill2, skill3, ...remainingSkills], // if top three skills are mandatory and heighlighted
      },
    } = this.props;
    return (
      <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            ClassComponent 2
          </h1>

          <table className="w-full border-collapse border border-gray-300 text-left">
            <tbody>
              <tr className="border-b border-gray-300 align-top">
                <td className="p-3 font-semibold text-gray-700 align-top">
                  Name:
                </td>
                <td className="p-3 text-gray-600 align-top">{name}</td>
              </tr>
              <tr className="border-b border-gray-300 align-top">
                <td className="p-3 font-semibold text-gray-700 align-top">
                  Age:
                </td>
                <td className="p-3 text-gray-600 align-top">{age}</td>
              </tr>
              <tr className="border-b border-gray-300 align-top">
                <td className="p-3 font-semibold text-gray-700 align-top">
                  Email:
                </td>
                <td className="p-3 text-gray-600 align-top">{email}</td>
              </tr>
              <tr className="border-b border-gray-300 align-top">
                <td className="p-3 font-semibold text-gray-700 align-top">
                  Skills:
                </td>
                <td className="p-3 text-gray-600 align-top">
                  <strong>{skill1}</strong>, <strong>{skill2}</strong>,{" "}
                  <strong>{skill3}</strong>, {remainingSkills.join(", ")}
                </td>
              </tr>
              <tr className="border-b border-gray-300 align-top">
                <td className="p-3 font-semibold text-gray-700 align-top">
                  count1:
                </td>
                <td
                  className={`p-3 font-bold ${
                    count1 % 2 === 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {count1}
                </td>
              </tr>
              <tr className="border-b border-gray-300 align-top">
                <td className="p-3 font-semibold text-gray-700 align-top">
                  count2:
                </td>
                <td className="p-3 text-gray-600 align-top">{count2}</td>
              </tr>
              <tr className="align-top">
                <td className="p-3 font-semibold text-gray-700 align-top">
                  count3:
                </td>
                <td className="p-3 text-gray-600 align-top">
                  {this.state.count3}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4 space-x-2">
            <button
              onClick={() =>
                this.setState({ count1: count1 + 1, count2: count2 + 2 })
              }
              className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              <FontAwesomeIcon icon={faPlus} /> Increase
            </button>

            <button
              onClick={() =>
                this.setState({
                  count1: this.state.count1 - 1,
                  count2: this.state.count2 - 2,
                })
              }
              className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              <FontAwesomeIcon icon={faMinus} /> Decrease
            </button>

            <button
              onClick={() => this.setState({ count1: 0, count2: 0 })}
              className="px-2 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              <FontAwesomeIcon icon={faTimes} /> Clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassComponent2;
