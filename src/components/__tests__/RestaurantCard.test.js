import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Restaurantcard component with props data", () => {
  render(
    <BrowserRouter>
      <RestaurantCard restaurantData={MOCK_DATA} />
    </BrowserRouter>
  );

  const restaurantName = screen.getByText("Vasireddy Swagruha Foods");
  expect(restaurantName).toBeInTheDocument();
});

it("Should render Restaurantcard component with Promoted label", () => {
  render(
    <BrowserRouter>
      <RestaurantCard restaurantData={MOCK_DATA} />
    </BrowserRouter>
  );

  const promoted = screen.getByText(/Promoted/);
  expect(promoted).toBeInTheDocument();
});
