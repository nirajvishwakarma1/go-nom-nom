import { useState, useEffect } from "react";
import { Container, Form, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { CDN_URL, API_URL } from "../utils/constants";
import { Link } from "react-router";
import Shimmer from "./Shimmer";

const Body = () => {
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body component rendered.");
  const [restaurantCards, setRestaurantCards] = useState([]);
  const [filteredRestaurantCards, setFilteredRestaurantCards] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const filterRestaurantsData = (data) => {
    return data?.data?.cards
      .filter((card) => card?.card?.card?.id === "restaurant_grid_listing_v2")
      .map(
        (restaurant) =>
          restaurant?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )[0]
      .map((restaurant) => restaurant?.info);
  };

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    const restaurantData = filterRestaurantsData(jsonData);
    setRestaurantCards(restaurantData);
    setFilteredRestaurantCards(restaurantData);
  };

  const getMatchingrastaurants = (searchTerm) => {
    searchTerm = searchTerm.trim().toLowerCase();
    if (!searchTerm) return setFilteredRestaurantCards(restaurantCards);

    const matchingRestaurants = restaurantCards.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.cuisines.some((cuisine) =>
          cuisine.toLowerCase().includes(searchTerm)
        )
    );
    return setFilteredRestaurantCards(matchingRestaurants);
  };

  // Conditional rendering
  return 0 === restaurantCards.length ? (
    <Shimmer />
  ) : (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Find You Favourite Restaurant</h2>

      {/* Search Bar */}
      <Form.Control
        type="text"
        placeholder="Search by name or cuisine..."
        className="mb-4"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          getMatchingrastaurants(e.target.value);
        }}
      />

      {/* Filters */}
      <p>
        <Button
          variant="primary"
          size="sm"
          onClick={() =>
            setFilteredRestaurantCards(() =>
              restaurantCards.filter((restaurant) => restaurant.avgRating > 4)
            )
          }
        >
          Top Rated Restaurants
        </Button>
      </p>

      {/* Restaurant Cards Grid */}
      <Row className="restaurant-cards-wrap">
        {filteredRestaurantCards.map((restaurant) => {
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
            <Col md={3} sm={6} key={id} className="mb-4 restaurant-card-wrap">
              <Link to={`/restaurant/${id}`}>
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
                    <Card.Text className="cuisines">
                      Cuisines: {cuisines.join(", ")}
                    </Card.Text>
                    <Card.Text className="area-name">
                      <FontAwesomeIcon icon={faLocationDot} /> {areaName}
                    </Card.Text>
                    <Card.Text>Status: {isOpen ? "Open" : "Closed"}</Card.Text>
                    <Card.Text>
                      Delivery time: {sla.deliveryTime} minutes
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Body;
