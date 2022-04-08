import React from "react";
import { render, screen } from "@testing-library/react";
import { FavoriteNumber } from "../components/FavouriteNumber";
import user from "@testing-library/user-event";

test("entering an invalid value shows an error message", () => {
  // ✅ Destructure rerender from the render method.
  // ✅ Confirm that if the user types in 10, there will be an error
  // ✅ rerender the <FavoriteNumber max={10} /> with a new max
  // ✅ expect the queryByRole('alert') to be null.
});
