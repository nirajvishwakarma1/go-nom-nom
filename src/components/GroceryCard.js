import { Col, Card, Button } from "react-bootstrap";

const GroceryCard = () => {
  return (
    <Col md={3}>
      <Card className="mb-3">
        <Card.Img variant="top" src="#" />
        <Card.Body>
          <Card.Title>Product Name</Card.Title>
          <Card.Text>Price: ₹100</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              console.log("add to cart functionality need to be implemented.");
            }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GroceryCard;
