import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { FavoriteNumber } from "../components/FavouriteNumber";

test('renders a number input with a label "Favorite Number"', () => {
  // ✅ Use the render method to render the <FavouriteNumber /> component.
  // ✅ Get the input by using the screen.getByLabelText method, passing in a a regex like /favorite number/i
  // ✅ Use the fireEvent.change method. The first parameter should be the input, the second should be {target: {value: '100'}}
  // ✅ expect screen.getByRole('alert') to have text content /the number is invalid/i
});
