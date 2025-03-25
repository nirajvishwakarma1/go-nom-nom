import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { MENU_API, CDN_URL } from "../utils/constants";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ShimmerRestaurant from "./ShimmerRestaurant";

const Restaurant = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const { id } = useParams();
  console.log("id:", id);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      const data = await fetch(MENU_API.replace("__restid__", id));
      const json = await data.json();
      const resData = json.data.cards
        .filter((card) => card?.card?.card?.info?.id === id)
        .map((card) => card?.card?.card?.info);
      if (resData.length > 0) setRestaurantData(resData[0]);
    };
    fetchData();

    return () => controller.abort(); // Cleanup API call
  }, []);

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

  return 0 === restaurantData.length ? (
    <ShimmerRestaurant />
  ) : (
    <Container>
      {/* Header Section */}
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
            <h1>
              {name}
              <Badge bg="success">{avgRating} ⭐</Badge>
            </h1>
            <p>
              {areaName}, {city}
            </p>
            <p>Cuisines: {cuisines.join(", ")}</p>
            <p>Delivery Time: {sla.deliveryTime}</p>
          </Col>
        </Row>
      </header>

      {/* Hero Image */}
    </Container>
  );
};

export default Restaurant;
