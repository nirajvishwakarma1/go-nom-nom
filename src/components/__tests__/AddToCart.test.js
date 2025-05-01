import React, { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantDetails from "../RestaurantDetails";
import MOCK_DATA from "../mocks/restaurantDetailsMock.json";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Header from "../Header";
import Cart from "../Cart";

jest.mock("../../utils/useReastaurantData", () => ({
  __esModule: true,
  default: () => MOCK_DATA, // or () => useState(MOCK_DATA)
}));

it("Should add data to cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantDetails />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const addButtons = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addButtons[0]);
  fireEvent.click(addButtons[1]);
  const cartNumber = screen.getByText("Cart (2)");
  expect(cartNumber).toBeInTheDocument();
  const cartItems = screen.getAllByTestId("cartitem");
  expect(cartItems.length).toBe(2);
});
