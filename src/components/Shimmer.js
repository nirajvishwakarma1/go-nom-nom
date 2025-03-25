import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Shimmer = () => (
  <Container className="shimmer-container mt-4">
    <h2 className="text-center mb-4">Find You Favourite Restaurant</h2>
    <Form.Control
      type="text"
      placeholder="Search by name or cuisine..."
      className="mb-4"
    />

    {/* Filters */}
    <p>
      <strong>Filter: </strong>
      <Button
        className="restaurant-filter-btn restaurants-filter-btn"
        variant="primary"
        size="sm"
        onClick={() =>
          setFilteredRestaurantCards(() =>
            restaurantCards.filter((restaurant) => restaurant.avgRating > 4)
          )
        }
      >
        Top Rated
      </Button>
      &nbsp;
      <Button
        className="restaurant-filter-btn show-all-restaurants-btn"
        variant="success"
        size="sm"
        onClick={() => setFilteredRestaurantCards(restaurantCards)}
      >
        Show All
      </Button>
    </p>
    <Row>
      <Col md={3} sm={6} className="my-4">
        <Card></Card>
      </Col>
      <Col md={3} sm={6} className="my-4">
        <Card></Card>
      </Col>
      <Col md={3} sm={6} className="my-4">
        <Card></Card>
      </Col>
      <Col md={3} sm={6} className="my-4">
        <Card></Card>
      </Col>
      <Col md={3} sm={6} className="my-4">
        <Card></Card>
      </Col>
      <Col md={3} sm={6} className="my-4">
        <Card></Card>
      </Col>
      <Col md={3} sm={6} className="my-4">
        <Card></Card>
      </Col>
      <Col md={3} sm={6} className="my-4">
        <Card></Card>
      </Col>
    </Row>
  </Container>
);

export default Shimmer;
