import React from "react";
import { Container, Button } from "react-bootstrap";

// Class based component
class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
      count3: 3,
    };
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  render() {
    const { name } = this.props;
    const { count, count2, count3 } = this.state;
    return (
      <Container className="py-4">
        <h2>{name}</h2>
        <p>Lorem ipsum dolor sit amet</p>
        <p>
          Count: {count}&nbsp;
          <Button
            size="sm"
            onClick={() => {
              this.setState({
                // count: this.state.count + 1,
                count: count + 1,
                count2: count2 + 1,
              });
            }}
          >
            Increate count
          </Button>
        </p>
        <p>Count2: {count2}</p>
        <p>Count3: {count3}</p>
      </Container>
    );
  }
}

export default About;
