import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import MinesweeperWindow from "./MinesweeperWindow";

import type { ReactNode } from "react";

vi.mock("./RetroWindow", () => ({
  RetroWindow: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("Minesweeper window", () => {
  it("lets touch users flag and unflag a cell without revealing it", () => {
    render(<MinesweeperWindow visible close={() => {}} />);
    fireEvent.click(screen.getByRole("button", { name: /Flag mode: Off/ }));
    fireEvent.click(
      screen.getByRole("gridcell", { name: "Row 1, column 1, hidden" }),
    );
    expect(
      screen.getByRole("gridcell", { name: "Row 1, column 1, flagged" }),
    ).toBeEnabled();
    expect(screen.getByLabelText("9 mines remaining")).toHaveTextContent("009");
    fireEvent.click(
      screen.getByRole("gridcell", { name: "Row 1, column 1, flagged" }),
    );
    expect(
      screen.getByRole("gridcell", { name: "Row 1, column 1, hidden" }),
    ).toBeEnabled();
    fireEvent.contextMenu(
      screen.getByRole("gridcell", { name: "Row 1, column 2, hidden" }),
    );
    expect(
      screen.getByRole("gridcell", { name: "Row 1, column 2, flagged" }),
    ).toBeEnabled();
    fireEvent.click(
      screen.getByRole("button", { name: "Start a new Minesweeper game" }),
    );
    expect(screen.getByLabelText("10 mines remaining")).toHaveTextContent(
      "010",
    );
    expect(screen.getAllByRole("gridcell", { name: /hidden$/ })).toHaveLength(
      81,
    );
  });

  it("starts timing after a reveal and clears its timer on reset and unmount", () => {
    vi.useFakeTimers();
    vi.spyOn(Math, "random").mockReturnValue(0.5);
    const { unmount } = render(<MinesweeperWindow visible close={() => {}} />);
    expect(vi.getTimerCount()).toBe(0);
    fireEvent.click(
      screen.getByRole("gridcell", { name: "Row 1, column 1, hidden" }),
    );
    expect(vi.getTimerCount()).toBe(1);
    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByLabelText("Elapsed time 3 seconds")).toHaveTextContent(
      "003",
    );
    fireEvent.click(screen.getByRole("button", { name: "New game" }));
    expect(screen.getByLabelText("Elapsed time 0 seconds")).toHaveTextContent(
      "000",
    );
    expect(vi.getTimerCount()).toBe(0);
    fireEvent.click(
      screen.getByRole("gridcell", { name: "Row 1, column 1, hidden" }),
    );
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});
