import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import App from "./App";
import { BOOT_DURATION_MS } from "./components/layout/MainLayout";

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("Portfolio startup", () => {
  it("preserves the five-second intro without a skip button", () => {
    vi.useFakeTimers();
    render(<App />);
    expect(
      screen.queryByRole("button", { name: /skip/i }),
    ).not.toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(BOOT_DURATION_MS - 1);
    });
    expect(screen.getByText(/welcome to my website/i)).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(
      screen.queryByText(/welcome to my website/i),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Projects" }),
    ).toBeInTheDocument();
  });

  it("clears its animation timer when unmounted", () => {
    vi.useFakeTimers();
    const { unmount } = render(<App />);
    expect(vi.getTimerCount()).toBeGreaterThan(0);
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});
