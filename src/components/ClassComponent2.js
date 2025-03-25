import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
      <Container>
        <Row>
          <Col>
            <h1>ClassComponent 2</h1>
            <ul>
              <li>Name: {name}</li>
              <li>Age: {age}</li>
              <li>Email: {email}</li>
              <li>
                Skills:
                <strong>{skill1}</strong>,&nbsp;<strong>{skill2}</strong>&nbsp;,
                <strong>{skill3}</strong>&nbsp;,{remainingSkills.join(", ")}
              </li>
            </ul>
            <p>
              count1:{" "}
              <strong style={{ color: count1 % 2 == 0 ? "green" : "red" }}>
                {count1}
              </strong>
            </p>
            <p>
              count2: <strong>{count2}</strong>
            </p>
            <p>
              count3: <strong>{this.state.count3}</strong>
            </p>
            <p>
              <Button
                size="sm"
                variant="success"
                onClick={() => {
                  this.setState({
                    count1: count1 + 1,
                    count2: count2 + 2,
                  });
                }}
              >
                <FontAwesomeIcon icon={faPlus} /> Increase
              </Button>
              &nbsp;
              <Button
                size="sm"
                variant="danger"
                onClick={() => {
                  this.setState({
                    count1: this.state.count1 - 1,
                    count2: this.state.count2 - 2,
                  });
                }}
              >
                <FontAwesomeIcon icon={faMinus} /> Decrease
              </Button>
              &nbsp;
              <Button
                size="sm"
                variant="secondary"
                onClick={() => {
                  this.setState({
                    count1: 0,
                    count2: 0,
                  });
                }}
              >
                <FontAwesomeIcon icon={faTimes} /> Clear
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ClassComponent2;
