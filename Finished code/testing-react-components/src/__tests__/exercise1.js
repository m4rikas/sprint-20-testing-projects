import React from "react";
import ReactDOM from "react-dom";
import { FavoriteNumber } from "../components/FavouriteNumber";

test('renders a number input with a label "Favorite Number"', () => {
  // ✅ Create a containing div with document.createElement and assign to a variable
  const div = document.createElement("div");
  // ✅ Render the <FavouriteNumber /> component (with ReactDOM.render) to the div
  ReactDOM.render(<FavoriteNumber />, div);
  // ✅ Use the .querySelector("input") to check that the type is number
  expect(div.querySelector("input").type).toBe("number");
  // ✅ Use the .querySelector("label") to check that the textContent is "Favorite Number"
  expect(div.querySelector("label").textContent).toBe("Favorite Number");
});
