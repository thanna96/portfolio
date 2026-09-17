import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { Desktop } from "./Desktop";

afterEach(cleanup);

describe("Desktop windows", () => {
  it("keeps multiple windows and restores a minimized email draft from the taskbar", async () => {
    const user = userEvent.setup();
    render(<Desktop />);
    await user.click(screen.getByRole("button", { name: "My Documents" }));
    const documents = await screen.findByRole(
      "dialog",
      { name: "My Documents" },
      { timeout: 5000 },
    );
    await user.click(screen.getByRole("button", { name: "Start" }));
    await user.click(screen.getByRole("button", { name: "Contact" }));
    const contact = await screen.findByRole("dialog", {
      name: "New Message - Outlook Express",
    });
    await user.type(
      within(contact).getByLabelText("Subject:"),
      "A saved draft",
    );
    await user.click(
      within(contact).getByRole("button", {
        name: "Minimize New Message - Outlook Express",
      }),
    );
    expect(contact).not.toBeVisible();
    expect(documents).toHaveAttribute("data-active", "true");
    await user.click(
      screen.getByRole("button", {
        name: "Switch to New Message - Outlook Express",
      }),
    );
    expect(contact).toBeVisible();
    expect(within(contact).getByLabelText("Subject:")).toHaveValue(
      "A saved draft",
    );
    await user.click(
      screen.getByRole("button", { name: "Switch to My Documents" }),
    );
    expect(documents).toHaveAttribute("data-active", "true");
    expect(contact).toHaveAttribute("data-active", "false");
    await user.click(
      within(documents).getByRole("button", { name: "Close My Documents" }),
    );
    expect(
      screen.queryByRole("button", { name: "Switch to My Documents" }),
    ).not.toBeInTheDocument();
    expect(contact).toHaveAttribute("data-active", "true");
  });

  it("opens one window on repeated activation, closes it and allows reopening", async () => {
    const user = userEvent.setup();
    render(<Desktop />);
    const documents = screen.getByRole("button", { name: "My Documents" });
    await user.click(documents);
    // Cold transformation of lazy window modules can exceed the default
    // one-second query timeout on a shared CI runner.
    const dialog = await screen.findByRole(
      "dialog",
      { name: "My Documents" },
      { timeout: 5000 },
    );
    await user.click(within(dialog).getByRole("button", { name: "My Resume" }));
    const resumeClose = await screen.findByRole("button", {
      name: "Close Thomas Hanna Resume",
    });
    const resume = resumeClose.closest('[role="dialog"]')! as HTMLElement;
    expect(
      within(resume).getByRole("img", {
        name: "Thomas Hanna résumé, page 1 of 2",
      }),
    ).toHaveAttribute("src", "/resume/page-1.png");
    await user.click(resumeClose);
    await waitFor(() => expect(resume).not.toBeInTheDocument());
    await user.click(
      within(dialog).getByRole("button", { name: "Profile Picture" }),
    );
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
