import { Container, Row, Col, Card, Placeholder } from "react-bootstrap";

const ShimmerRestaurant = () => {
  return (
    <Container>
      {/* Header Shimmer */}
      <div className="text-center my-4">
        <Placeholder as="h1" animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={4} /> • <Placeholder xs={3} /> •{" "}
          <Placeholder xs={5} />
        </Placeholder>
      </div>

      {/* Hero Image Shimmer */}
      <Row className="mb-4">
        <Col>
          <div
            className="shimmer-box w-100 rounded"
            style={{ height: "250px" }}
          ></div>
        </Col>
      </Row>

      {/* Menu Shimmer */}
      <h2 className="mb-3">Menu</h2>
      <Row>
        {[1, 2, 3].map((index) => (
          <Col md={4} key={index}>
            <Card className="mb-3">
              <div className="shimmer-box" style={{ height: "150px" }}></div>
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={5} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Reviews Shimmer */}
      <h2 className="mt-4 mb-3">Customer Reviews</h2>
      {[1, 2].map((index) => (
        <Card className="mb-2" key={index}>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={3} /> ⭐ <Placeholder xs={2} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={8} /> <Placeholder xs={6} />
            </Placeholder>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default ShimmerRestaurant;
