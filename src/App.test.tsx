import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App", () => {
  it("renders boot up message", () => {
    render(<App />);
    const bootMessage = screen.getByText(/welcome to my website!/i);
    expect(bootMessage).toBeInTheDocument();
  });
});