import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ExplorerWindow } from "./ExplorerWindow";
import { getAge } from "./MyInformationWindow";
import { RetroWindow } from "./RetroWindow";

describe("retro windows", () => {
  it("names its dialog and exposes an accessible close action", () => {
    const close = vi.fn();
    render(
      <RetroWindow visible close={close} title="Projects" icon="folder.png">
        Project links
      </RetroWindow>,
    );
    expect(
      screen.getByRole("dialog", { name: "Projects" }),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Close Projects" }));
    expect(close).toHaveBeenCalledOnce();
  });

  it("unmounts the external website as soon as the explorer closes", () => {
    const close = vi.fn();
    const { rerender } = render(
      <ExplorerWindow visible icon="explorer.png" close={close} />,
    );
    expect(screen.getByTitle("Space Jam (1996) website")).toBeInTheDocument();
    rerender(
      <ExplorerWindow visible={false} icon="explorer.png" close={close} />,
    );
    expect(
      screen.queryByTitle("Space Jam (1996) website"),
    ).not.toBeInTheDocument();
  });

  it("changes age on the birthday rather than an average year boundary", () => {
    expect(getAge(new Date(2026, 2, 14))).toBe(29);
    expect(getAge(new Date(2026, 2, 15))).toBe(30);
    expect(getAge(new Date(2026, 0, 1))).toBe(29);
  });
});
