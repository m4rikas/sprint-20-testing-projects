import React from "react";
import { render, screen } from "@testing-library/react";
import { FavoriteNumber } from "../components/FavouriteNumber";

test('renders a number input with a label "Favorite Number"', () => {
  // ✅ Render the <FavouriteNumber /> component.
  // ✅ Get the input by using the screen.getByLabelText method, passing in a a regex like /favorite number/i
  // ✅ Expect the input toHaveAttribute of type number
});
