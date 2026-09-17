import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ExplorerWindow } from "./ExplorerWindow";
import { getAge } from "./MyInformationWindow";
import { RetroWindow } from "./RetroWindow";

afterEach(cleanup);

function pointer(target: Element, type: string, x: number, y: number) {
  const event = new MouseEvent(type, {
    bubbles: true,
    clientX: x,
    clientY: y,
    button: 0,
  });
  Object.defineProperty(event, "pointerId", { value: 1 });
  fireEvent(target, event);
}

describe("retro windows", () => {
  it("drags by the titlebar, clamps to the viewport and resets on resize", () => {
    render(
      <RetroWindow visible close={vi.fn()} title="Projects" icon="folder.png">
        Project links
      </RetroWindow>,
    );
    const handle = screen.getByText("Projects").parentElement!;
    const wrapper = handle.closest(".ant-modal-container")!.parentElement!;
    vi.spyOn(wrapper, "getBoundingClientRect").mockReturnValue({
      left: 100,
      top: 100,
      right: 600,
      bottom: 600,
      width: 500,
      height: 500,
      x: 100,
      y: 100,
      toJSON: () => ({}),
    });
    pointer(handle, "pointerdown", 120, 110);
    pointer(handle, "pointermove", 150, 140);
    expect(wrapper.style.transform).toBe("translate(30px, 30px)");
    pointer(handle, "pointermove", -1000, -1000);
    expect(wrapper.style.transform).toBe("translate(-92px, -92px)");
    pointer(handle, "pointermove", 10000, 10000);
    expect(wrapper.style.transform).toBe(
      `translate(${window.innerWidth - 608}px, ${window.innerHeight - 608}px)`,
    );
    pointer(handle, "pointerup", 10000, 10000);
    pointer(handle, "pointermove", 0, 0);
    expect(wrapper.style.transform).toBe(
      `translate(${window.innerWidth - 608}px, ${window.innerHeight - 608}px)`,
    );
    fireEvent(window, new Event("resize"));
    expect(wrapper.style.transform).toBe("translate(0px, 0px)");
    pointer(
      screen.getByRole("button", { name: "Close Projects" }),
      "pointerdown",
      0,
      0,
    );
    pointer(handle, "pointermove", 100, 100);
    expect(wrapper.style.transform).toBe("translate(0px, 0px)");
  });
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

  it("opens Space Jam with a native link instead of a blocked iframe", () => {
    render(<ExplorerWindow visible icon="explorer.png" close={vi.fn()} />);
    const link = screen.getByRole("link", { name: "Open Space Jam website" });
    expect(link).toHaveAttribute("href", "https://www.spacejam.com/1996/");
    expect(link).not.toHaveAttribute("target");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(document.querySelector("iframe")).not.toBeInTheDocument();
  });

  it("changes age on the birthday rather than an average year boundary", () => {
    expect(getAge(new Date(2026, 2, 14))).toBe(29);
    expect(getAge(new Date(2026, 2, 15))).toBe(30);
    expect(getAge(new Date(2026, 0, 1))).toBe(29);
  });
});
