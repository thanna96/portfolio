import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import ContactWindow from "./ContactWindow";
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
  it("drags within desktop bounds, resizes and restores its size after maximizing", () => {
    render(
      <RetroWindow visible close={vi.fn()} title="Projects" icon="folder.png">
        Project links
      </RetroWindow>,
    );
    const dialog = screen.getByRole("dialog", { name: "Projects" });
    const handle = screen.getByText("Projects").parentElement!;
    const left = parseFloat(dialog.style.left);
    pointer(handle, "pointerdown", 120, 110);
    pointer(handle, "pointermove", 150, 140);
    expect(parseFloat(dialog.style.left)).toBe(left + 30);
    pointer(handle, "pointermove", -1000, -1000);
    expect(dialog.style.left).toBe("8px");
    expect(dialog.style.top).toBe("8px");
    pointer(handle, "pointerup", 0, 0);
    const resize = screen.getByRole("button", { name: "Resize Projects" });
    const width = parseFloat(dialog.style.width);
    pointer(resize, "pointerdown", 100, 100);
    pointer(resize, "pointermove", 140, 120);
    pointer(resize, "pointerup", 140, 120);
    expect(parseFloat(dialog.style.width)).toBe(width + 40);
    fireEvent.click(screen.getByRole("button", { name: "Maximize Projects" }));
    expect(dialog).toHaveAttribute("data-maximized", "true");
    expect(dialog.style.width).toBe("100%");
    fireEvent.click(screen.getByRole("button", { name: "Restore Projects" }));
    expect(parseFloat(dialog.style.width)).toBe(width + 40);
    fireEvent.keyDown(screen.getByRole("button", { name: "Resize Projects" }), {
      key: "ArrowRight",
    });
    expect(parseFloat(dialog.style.width)).toBe(width + 50);
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

  it("renders the local classic Google page without external navigation", () => {
    render(<ExplorerWindow visible icon="explorer.png" close={vi.fn()} />);
    expect(screen.getByRole("heading", { name: "Google" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Google Search" }),
    ).toBeDisabled();
    expect(
      screen.getByRole("button", { name: "I'm Feeling Lucky" }),
    ).toBeDisabled();
    expect(document.querySelector("iframe")).not.toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("hands the draft to an email client with the fixed recipient and encoded content", () => {
    render(<ContactWindow visible close={vi.fn()} />);
    fireEvent.change(screen.getByLabelText("Subject:"), {
      target: { value: "Hello & welcome?" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "First line\nSecond & third" },
    });
    expect(screen.getByLabelText("To:")).toHaveValue("thanna96@gmail.com");
    const mailto = screen
      .getByRole("link", { name: "Open email app" })
      .getAttribute("href")!;
    expect(mailto).toBe(
      "mailto:thanna96@gmail.com?subject=Hello%20%26%20welcome%3F&body=First%20line%0ASecond%20%26%20third",
    );
    const gmail = new URL(
      screen.getByRole("link", { name: "Open Gmail" }).getAttribute("href")!,
    );
    expect(gmail.searchParams.get("to")).toBe("thanna96@gmail.com");
    expect(gmail.searchParams.get("su")).toBe("Hello & welcome?");
    expect(gmail.searchParams.get("body")).toBe("First line\nSecond & third");
  });

  it("changes age on the birthday rather than an average year boundary", () => {
    expect(getAge(new Date(2026, 2, 14))).toBe(29);
    expect(getAge(new Date(2026, 2, 15))).toBe(30);
    expect(getAge(new Date(2026, 0, 1))).toBe(29);
  });
});
