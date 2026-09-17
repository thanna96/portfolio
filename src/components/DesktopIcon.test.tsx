import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { DesktopIcon } from "./DesktopIcon";

const icon = {
  id: "documents",
  text: "My Documents",
  image: "/folder.png",
  focused: "",
  setFocused: vi.fn(),
  isFolder: false,
};

describe("DesktopIcon", () => {
  it("activates window actions with Enter and Space", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<DesktopIcon {...icon} onClick={onClick} />);
    await user.tab();
    expect(screen.getByRole("button", { name: "My Documents" })).toHaveFocus();
    await user.keyboard("{Enter}");
    await user.keyboard(" ");
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("renders destinations as native links with safe new tabs", () => {
    render(<DesktopIcon {...icon} href="https://react.dev/learn" />);
    const link = screen.getByRole("link", { name: "My Documents" });
    expect(link).toHaveAttribute("href", "https://react.dev/learn");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
