import { CDN_URL } from "../utils/constants";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = (props) => {
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
  } = props.restaurantData;

  return (
    <Col md={3} sm={6} className="mb-4 restaurant-card-wrap">
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
            <Card.Text>Delivery time: {sla.deliveryTime} minutes</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default RestaurantCard;
