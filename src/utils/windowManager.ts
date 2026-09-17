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
function activateWindow(state: WindowState, id: WindowId): WindowState {
  return {
    ...state,
    opened: state.opened.includes(id) ? state.opened : [...state.opened, id],
    order: [...state.order.filter((windowId) => windowId !== id), id],
    minimized: state.minimized.filter((windowId) => windowId !== id),
    active: id,
  };
}

function nextActiveWindow(order: WindowId[], minimized: WindowId[]) {
  return [...order].reverse().find((id) => !minimized.includes(id)) ?? null;
}

function minimizeWindow(state: WindowState, id: WindowId): WindowState {
  const minimized = [...new Set([...state.minimized, id])];
  return {
    ...state,
    minimized,
    active:
      state.active === id
        ? nextActiveWindow(state.order, minimized)
        : state.active,
  };
}

function closeWindow(state: WindowState, id: WindowId): WindowState {
  const order = state.order.filter((windowId) => windowId !== id);
  const minimized = state.minimized.filter((windowId) => windowId !== id);
  return {
    opened: state.opened.filter((windowId) => windowId !== id),
    order,
    minimized,
    maximized: state.maximized.filter((windowId) => windowId !== id),
    active:
      state.active === id ? nextActiveWindow(order, minimized) : state.active,
  };
}

export function windowReducer(
  state: WindowState,
  { type, id }: WindowAction,
): WindowState {
  switch (type) {
    case "open":
    case "focus":
      return activateWindow(state, id);
    case "minimize":
      return minimizeWindow(state, id);
    case "close":
      return closeWindow(state, id);
    case "maximize":
      return {
        ...activateWindow(state, id),
        maximized: state.maximized.includes(id)
          ? state.maximized.filter((windowId) => windowId !== id)
          : [...state.maximized, id],
      };
    case "taskbar":
      // Clicking the active taskbar button hides it; other buttons restore it.
      if (state.active === id && !state.minimized.includes(id))
        return minimizeWindow(state, id);
      return activateWindow(state, id);
  }
}
