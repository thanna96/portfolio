import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Desktop } from "./Desktop";

describe("Desktop windows", () => {
  it("opens one window on repeated activation, closes it and allows reopening", async () => {
    const user = userEvent.setup();
    render(<Desktop />);
    const documents = screen.getByRole("button", { name: "My Documents" });
    await user.click(documents);
    // Cold transformation of the lazy Ant Design chunk can exceed the default
    // one-second query timeout on a shared CI runner.
    const dialog = await screen.findByRole(
      "dialog",
      { name: "My Documents" },
      { timeout: 5000 },
    );
    expect(
      within(dialog).getByRole("link", { name: "My Resume" }),
    ).toHaveAttribute("href", "/Thomas_Hanna_Resume.pdf");
    await user.click(
      within(dialog).getByRole("button", { name: "Profile Picture" }),
    );
    // rc-util uses the same title ID for every dialog in test mode, so locate
    // this window through its unique close control when two dialogs are open.
    const paintClose = await screen.findByRole("button", {
      name: "Close Profile Picture - Paint",
    });
    const paint = paintClose.closest('[role="dialog"]')! as HTMLElement;
    expect(
      within(paint).getByRole("img", { name: "Thomas Hanna" }),
    ).toBeInTheDocument();
    await user.click(paintClose);
    await waitFor(() => expect(paint).not.toBeInTheDocument());
    await user.click(documents);
    expect(
      screen.getAllByRole("dialog", { name: "My Documents" }),
    ).toHaveLength(1);
    await user.click(
      within(dialog).getByRole("button", { name: "Close My Documents" }),
    );
    await waitFor(() =>
      expect(
        screen.queryByRole("dialog", { name: "My Documents" }),
      ).not.toBeInTheDocument(),
    );
    await user.click(documents);
    expect(
      await screen.findByRole("dialog", { name: "My Documents" }),
    ).toBeInTheDocument();
  });
});
