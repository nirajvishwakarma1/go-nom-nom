import React, { useState } from "react";
import { Container, Form, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { CDN_URL } from "../utils/constants";

const RestaurantLists = ({ restaurants }) => {
  const [restaurantCards, setRestaurantCards] = useState(restaurants);

  const getMatchingrastaurants = (searchTerm) => {
    searchTerm = searchTerm.trim().toLowerCase();
    const matchingRestaurants = restaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.cuisines.some((cuisine) =>
          cuisine.toLowerCase().includes(searchTerm)
        )
    );
    return setRestaurantCards(matchingRestaurants);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Find You Favourite Restaurant</h2>

      {/* Search Bar */}
      <Form.Control
        type="text"
        placeholder="Search by name or cuisine..."
        className="mb-4"
        onChange={(event) => getMatchingrastaurants(event.target.value)}
      />

      {/* Filters */}
      <p>
        <Button
          variant="primary"
          size="sm"
          onClick={() =>
            setRestaurantCards(() =>
              restaurantCards.filter((restaurant) => restaurant.avgRating > 4.3)
            )
          }
        >
          Top Rated Restaurants
        </Button>
      </p>

      {/* Restaurant Cards Grid */}
      <Row>
        {restaurantCards.length > 0 ? (
          restaurantCards.map((restaurant) => {
            console.log(restaurant);
            const {
              id,
              name,
              cuisines,
              cloudinaryImageId,
              areaName,
              avgRating,
              costForTwo,
              isOpen,
              sla,
            } = restaurant;
            return (
              <Col md={4} sm={6} key={id} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={CDN_URL + cloudinaryImageId}
                    alt={name}
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Rating: {avgRating}</Card.Text>
                    <Card.Text>Cost for two: {costForTwo}</Card.Text>
                    <Card.Text>Cuisines: {cuisines.join(", ")}</Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faLocationDot} /> {areaName}
                    </Card.Text>
                    <Card.Text>Status: {isOpen ? "Open" : "Closed"}</Card.Text>
                    <Card.Text>
                      Delivery time: {sla.deliveryTime} minutes
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <p className="text-center">No restaurants found</p>
        )}
      </Row>
    </Container>
  );
};

export default RestaurantLists;
