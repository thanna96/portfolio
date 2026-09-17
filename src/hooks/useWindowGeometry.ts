import { useCallback, useEffect, useRef, useState } from "react";

import {
  fitWindowToBounds,
  resizeWindowToBounds,
  TASKBAR_HEIGHT,
  TITLEBAR_HEIGHT,
  MIN_WINDOW_WIDTH,
  MIN_WINDOW_HEIGHT,
  type DesktopBounds,
  type Geometry,
} from "../utils/windowGeometry";

import type { KeyboardEvent, PointerEvent } from "react";

type WindowGeometryOptions = {
  width: number;
  height: number;
  minimized: boolean;
  maximized: boolean;
  bounds?: DesktopBounds;
  cascadeOffset?: number;
};

// Geometry stays local to each window so restoring it retains its previous size.
export function useWindowGeometry({
  width,
  height,
  minimized,
  maximized,
  bounds,
  cascadeOffset = 0,
}: WindowGeometryOptions) {
  const getBounds = useCallback(
    () => bounds ?? { width: window.innerWidth, height: window.innerHeight },
    [bounds],
  );
  const fitWindow = useCallback(
    (rect: Geometry) => fitWindowToBounds(rect, getBounds()),
    [getBounds],
  );
  const [geometry, setGeometry] = useState<Geometry>(() =>
    fitWindow({
      x: (getBounds().width - width) / 2 + cascadeOffset,
      y: (getBounds().height - height - TASKBAR_HEIGHT) / 2 + cascadeOffset,
      width,
      height: height + TITLEBAR_HEIGHT,
    }),
  );
  const gesture = useRef<{
    pointerId: number;
    x: number;
    y: number;
    rect: Geometry;
    resize: boolean;
    handle: HTMLElement;
  } | null>(null);
  const endGesture = () => {
    const current = gesture.current;
    gesture.current = null;
    if (current?.handle.hasPointerCapture?.(current.pointerId))
      current.handle.releasePointerCapture(current.pointerId);
  };
  useEffect(() => {
    const resized = () => {
      endGesture();
      setGeometry((rect) => fitWindow(rect));
    };
    resized();
    window.addEventListener("resize", resized);
    return () => {
      window.removeEventListener("resize", resized);
      endGesture();
    };
  }, [fitWindow]);
  useEffect(() => {
    if (minimized || maximized) endGesture();
  }, [minimized, maximized]);
  const startGesture = (event: PointerEvent<HTMLElement>, resize = false) => {
    if (
      gesture.current ||
      maximized ||
      event.isPrimary === false ||
      event.button !== 0 ||
      (!resize && (event.target as HTMLElement).closest("button, a"))
    )
      return;
    event.preventDefault();
    gesture.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      rect: geometry,
      resize,
      handle: event.currentTarget,
    };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };
  const moveGesture = (event: PointerEvent<HTMLElement>) => {
    const current = gesture.current;
    if (!current || current.pointerId !== event.pointerId) return;
    const dx = event.clientX - current.x,
      dy = event.clientY - current.y;
    if (current.resize) {
      setGeometry(resizeWindowToBounds(current.rect, dx, dy, getBounds()));
    } else
      setGeometry(
        fitWindow({
          ...current.rect,
          x: current.rect.x + dx,
          y: current.rect.y + dy,
        }),
      );
  };
  const resizeWithKeyboard = (event: KeyboardEvent<HTMLButtonElement>) => {
    const delta: Record<string, [number, number]> = {
      ArrowRight: [10, 0],
      ArrowLeft: [-10, 0],
      ArrowDown: [0, 10],
      ArrowUp: [0, -10],
    };
    if (delta[event.key]) {
      event.preventDefault();
      const [dx, dy] = delta[event.key];
      setGeometry((current) =>
        fitWindow({
          ...current,
          width: Math.max(MIN_WINDOW_WIDTH, current.width + dx),
          height: Math.max(MIN_WINDOW_HEIGHT, current.height + dy),
        }),
      );
    }
  };
  const pointerHandlers = {
    onPointerMove: moveGesture,
    onPointerUp: endGesture,
    onPointerCancel: endGesture,
    onLostPointerCapture: endGesture,
  };
  return {
    geometry,
    dragHandlers: {
      ...pointerHandlers,
      onPointerDown: (event: PointerEvent<HTMLElement>) => startGesture(event),
    },
    resizeHandlers: {
      ...pointerHandlers,
      onPointerDown: (event: PointerEvent<HTMLElement>) =>
        startGesture(event, true),
      onKeyDown: resizeWithKeyboard,
    },
  };
}
