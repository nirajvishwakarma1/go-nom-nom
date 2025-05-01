import React, { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantCards from "../RestaurantCards";
import MOCK_DATA from "../mocks/restaurantCardsMock.json";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";

jest.mock("../../utils/useRestaurants", () => ({
  __esModule: true,
  default: () => MOCK_DATA,
}));

it("Should search restaurants list for burger text input", async () => {
  // when we use fetch or state variables we need to wrap our render in act
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantCards />
        </Provider>
      </BrowserRouter>
    );
  });

  //   const cardsBeforeSearch = screen.getAllByTestId("resCard");
  //   expect(cardsBeforeSearch.length).toBe(20);

  const searchField = screen.getByPlaceholderText(
    "Search restaurants by name or cuisine..."
  );
  fireEvent.change(searchField, { target: { value: "burger" } });

  //   expect(searchField).toBeInTheDocument();
  expect(searchField.value).toBe("burger");

  //   fireEvent.change(searchField, { target: { value: "burger" } });
  //   const pizzaHut = screen.getByText("Pizza Hut");
  //   expect(pizzaHut).toBeInTheDocument();
  //   const cardsAfterSearch = screen.getAllByTestId("resCard");

  //   expect(cardsAfterSearch.length).toBe(4);
});
