import { Container, Form, Row, Button } from "react-bootstrap";
import RestaurantCard from "./RestaurantCard";
import useRestaurants from "../utils/useRestaurants";
import Shimmer from "./Shimmer";

const RestaurantCards = () => {
  // use custom hook to manage restaurants data
  const {
    restaurants,
    filteredRestaurants,
    searchText,
    setSearchText,
    getMatchingRestaurants,
    filterTopRatedRestaurants,
    showAllRestaurants,
  } = useRestaurants();

  // Conditional rendering
  return 0 === restaurants.length ? (
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
          getMatchingRestaurants(e.target.value);
        }}
      />

      {/* Filters */}
      <p>
        <strong>Filter: </strong>
        <Button
          className="restaurant-filter-btn"
          variant="primary"
          size="sm"
          onClick={filterTopRatedRestaurants}
        >
          Top Rated
        </Button>
        &nbsp;
        <Button
          className="restaurant-filter-btn show-all-restaurants-btn"
          variant="success"
          size="sm"
          onClick={showAllRestaurants}
        >
          Show All
        </Button>
      </p>

      {/* Restaurant Cards Grid */}
      <Row className="restaurant-cards-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.id} restaurantData={restaurant} />
          );
        })}
      </Row>
    </Container>
  );
};

export default RestaurantCards;
