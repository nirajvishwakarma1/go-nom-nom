import { Container, Row, Col } from "react-bootstrap";
import ExUseContext from "./ExUseContext";
import ExRef from "./ExRef";
import { useEffect, useState } from "react";

const Test = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);
  const [count3, setCount3] = useState(3);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1((prevCount) => prevCount + 1);
    }, 1000);
    console.log("useEffect rendered");

    return () => {
      clearInterval(interval1);
      console.log("Component <Test /> unmounted.");
      console.log("interval1 cleared.");
    };
  }, []);

  return (
    <Container>
      {console.log(count1)}
      <Row>
        <Col>
          <h1>Test</h1>
          <p>
            count1: <strong>{count1}</strong>
          </p>
          {/* <ExUseContext /> */}
          <ExRef />
        </Col>
      </Row>
    </Container>
  );
};

export default Test;
