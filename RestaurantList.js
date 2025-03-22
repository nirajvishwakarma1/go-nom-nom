import React, { useState } from "react";
import { Container, Form, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const cloudinaryBasePath =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Sample restaurant data
const RestaurantLists = (data) => {
  const restaurantsData = data.data.data.cards.find(
    (cards) => cards.card.card.id === "restaurant_grid_listing_v2"
  );
  const { restaurants: restaurantCards } =
    restaurantsData.card.card.gridElements.infoWithStyle;

  console.log(restaurantCards);
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Find You Favourite Restaurant</h2>

      {/* Search Bar */}
      <Form.Control
        type="text"
        placeholder="Search by name or cuisine..."
        className="mb-4"
      />

      {/* Restaurant Cards Grid */}
      <Row>
        {restaurantCards.length > 0 ? (
          restaurantCards.map((restaurant) => {
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
            } = restaurant.info;
            return (
              <Col md={4} sm={6} key={id} className="mb-4">
                {console.log(restaurant.info)}
                <Card>
                  <Card.Img
                    variant="top"
                    src={cloudinaryBasePath + cloudinaryImageId}
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
