import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { FavoriteNumber } from "../components/FavouriteNumber";

test('renders a number input with a label "Favorite Number"', () => {
  // ✅ Use the render method to render the <FavouriteNumber /> component.
  render(<FavoriteNumber />);
  // ✅ Get the input by using the screen.getByLabelText method, passing in a a regex like /favorite number/i
  const input = screen.getByLabelText(/favorite number/i);
  // ✅ Use the fireEvent.change method. The first parameter should be the input, the second should be {target: {value: '100'}}
  fireEvent.change(input, { target: { value: "100" } });
  // ✅ expect screen.getByRole('alert') to have text content /the number is invalid/i
  expect(screen.getByRole("alert").textContent).toMatch(
    /the number is invalid/i
  );
});
