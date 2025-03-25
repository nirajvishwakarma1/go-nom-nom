import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantData from "../utils/useReastaurantData";
import ShimmerRestaurant from "./ShimmerRestaurant";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurantData = useRestaurantData(id);

  if (null === restaurantData) return <ShimmerRestaurant />;

  const {
    name,
    areaName,
    locality,
    city,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
    isOpen,
    cloudinaryImageId: img,
  } = restaurantData;

  return (
    <Container>
      <header className="text-center my-4">
        <Row className="mb-4">
          <Col>
            <img
              src={`${CDN_URL}${img}`}
              alt="Restaurant"
              className="img-fluid rounded"
            />
          </Col>
          <Col>
            <h1>{name}</h1>
            <p>
              <Badge bg="success">{avgRating} ⭐</Badge>{" "}
              <small>
                <em className="color-secondary">{totalRatingsString}</em>
              </small>
            </p>
            <p>
              {areaName}, {locality}, {city}
            </p>
            <p>Cuisines: {cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>
            <p>Delivery Time: {sla.deliveryTime}</p>
            <p>{isOpen ? "Open" : "Closed"}</p>
          </Col>
        </Row>
      </header>
    </Container>
  );
};

export default RestaurantDetails;
