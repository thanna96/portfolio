export type Geometry = { x: number; y: number; width: number; height: number };
export type DesktopBounds = { width: number; height: number };

export const TASKBAR_HEIGHT = 40;
export const TITLEBAR_HEIGHT = 24;
const WINDOW_MARGIN = 8;
export const MIN_WINDOW_WIDTH = 280;
export const MIN_WINDOW_HEIGHT = 200;

export function fitWindowToBounds(
  rect: Geometry,
  bounds: DesktopBounds,
): Geometry {
  const width = Math.min(
    rect.width,
    Math.max(1, bounds.width - WINDOW_MARGIN * 2),
  );
  const height = Math.min(
    rect.height,
    Math.max(1, bounds.height - TASKBAR_HEIGHT - WINDOW_MARGIN * 2),
  );
  return {
    width,
    height,
    x: Math.max(
      WINDOW_MARGIN,
      Math.min(rect.x, bounds.width - width - WINDOW_MARGIN),
    ),
    y: Math.max(
      WINDOW_MARGIN,
      Math.min(rect.y, bounds.height - height - TASKBAR_HEIGHT - WINDOW_MARGIN),
    ),
  };
}

export function resizeWindowToBounds(
  rect: Geometry,
  dx: number,
  dy: number,
  bounds: DesktopBounds,
): Geometry {
  const minWidth = Math.min(MIN_WINDOW_WIDTH, bounds.width - WINDOW_MARGIN * 2);
  const minHeight = Math.min(
    MIN_WINDOW_HEIGHT,
    bounds.height - TASKBAR_HEIGHT - WINDOW_MARGIN * 2,
  );
  const maxWidth = bounds.width - rect.x - WINDOW_MARGIN;
  const maxHeight = bounds.height - rect.y - TASKBAR_HEIGHT - WINDOW_MARGIN;
  return {
    ...rect,
    width: Math.max(minWidth, Math.min(rect.width + dx, maxWidth)),
    height: Math.max(minHeight, Math.min(rect.height + dy, maxHeight)),
  };
}
