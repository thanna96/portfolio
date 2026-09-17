import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { TaskBar } from "./TaskBar";

afterEach(cleanup);

describe("Start menu", () => {
  it("opens with the keyboard and returns focus when Escape closes it", async () => {
    const user = userEvent.setup();
    render(<TaskBar />);
    const start = screen.getByRole("button", { name: "Start" });
    start.focus();
    await user.keyboard("{Enter}");
    expect(start).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("link", { name: "Resume" })).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(start).toHaveAttribute("aria-expanded", "false");
    expect(start).toHaveFocus();
  });

  it("closes when clicking outside the navigation", async () => {
    const user = userEvent.setup();
    render(<TaskBar />);
    const start = screen.getByRole("button", { name: "Start" });
    await user.click(start);
    await user.click(document.body);
    expect(start).toHaveAttribute("aria-expanded", "false");
  });
});
