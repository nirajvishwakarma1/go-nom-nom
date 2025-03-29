import { useState, useEffect } from "react";
import { RESTAURANT_DATA_API } from "./constants";

const useRestaurantData = (restaurantId) => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchRestaurantData(restaurantId);

    return () => controller.abort(); // Cleanup API call
  }, []);

  const fetchRestaurantData = async (restaurantId) => {
    const data = await fetch(RESTAURANT_DATA_API + restaurantId);
    const json = await data.json();
    if (json.data) setRestaurantData(json.data);

    // console.log(json);

    // const resDataa = json.data.cards.filter(
    //   (card) => card?.card?.card?.info?.id === restaurantId
    // );
    // //   .map((card) => card);

    // const resData = json.data.cards
    //   .filter((card) => card?.card?.card?.info?.id === restaurantId)
    //   .map((card) => card?.card?.card?.info);
    // if (resData.length > 0) setRestaurantData(resData[0]);
  };

  return restaurantData;
};

export default useRestaurantData;
