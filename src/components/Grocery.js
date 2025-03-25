import { Container, Row } from "react-bootstrap";
import GroceryCard from "./GroceryCard";

const Grocery = () => {
  return (
    <Container className="mt-4">
      <Row>
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
      </Row>
    </Container>
  );
};

export default Grocery;
