import { render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";

test("renders boot up message", () => {
  render(<App />);
  const bootMessage = screen.getByText(/welcome to my website!/i);
  expect(bootMessage).toBeInTheDocument();
});
