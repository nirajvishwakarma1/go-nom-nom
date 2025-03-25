import React from "react";
import ClassComponent2 from "./ClassComponent2";
import { Container, Row, Col } from "react-bootstrap";

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
      <Container className="py-4">
        <Row>
          <Col>
            <h1>ClassComponent 1</h1>
            <p>{this.props.name}</p>
            <ClassComponent2 data={data} email="niraj.vishwa369@gmail.com" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ClassComponent1;
