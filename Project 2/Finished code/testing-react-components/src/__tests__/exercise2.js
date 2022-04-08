import React from "react";
import { render, screen } from "@testing-library/react";
import { FavoriteNumber } from "../components/FavouriteNumber";

test('renders a number input with a label "Favorite Number"', () => {
  // ✅ Render the <FavouriteNumber /> component.
  render(<FavoriteNumber />);
  // ✅ Get the input by using the screen.getByLabelText method, passing in a a regex like /favorite number/i
  const input = screen.getByLabelText(/favorite number/i);
  // ✅ Expect the input toHaveAttribute of type number
  expect(input).toHaveAttribute("type", "number");
});
