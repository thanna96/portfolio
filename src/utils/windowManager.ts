import type { WindowId } from "./desktopTypes";

export type WindowState = {
  opened: WindowId[];
  order: WindowId[];
  minimized: WindowId[];
  maximized: WindowId[];
  active: WindowId | null;
};
export type WindowAction = {
  type: "open" | "focus" | "close" | "minimize" | "maximize" | "taskbar";
  id: WindowId;
};
export const initialWindows: WindowState = {
  opened: [],
  order: [],
  minimized: [],
  maximized: [],
  active: null,
};
export function windowReducer(
  state: WindowState,
  action: WindowAction,
): WindowState {
  const { id, type } = action;
  if (
    type === "open" ||
    type === "focus" ||
    (type === "taskbar" &&
      (state.active !== id || state.minimized.includes(id)))
  ) {
    return {
      ...state,
      opened: state.opened.includes(id) ? state.opened : [...state.opened, id],
      order: [...state.order.filter((item) => item !== id), id],
      minimized: state.minimized.filter((item) => item !== id),
      active: id,
    };
  }
  if (type === "maximize") {
    const focused = windowReducer(state, { type: "focus", id });
    return {
      ...focused,
      maximized: state.maximized.includes(id)
        ? state.maximized.filter((item) => item !== id)
        : [...state.maximized, id],
    };
  }
  const opened =
    type === "close"
      ? state.opened.filter((item) => item !== id)
      : state.opened;
  const order =
    type === "close" ? state.order.filter((item) => item !== id) : state.order;
  const minimized =
    type === "close"
      ? state.minimized.filter((item) => item !== id)
      : [...new Set([...state.minimized, id])];
  return {
    opened,
    order,
    minimized,
    maximized:
      type === "close"
        ? state.maximized.filter((item) => item !== id)
        : state.maximized,
    active:
      state.active === id
        ? ([...order].reverse().find((item) => !minimized.includes(item)) ??
          null)
        : state.active,
  };
}
