import { useCallback, useEffect, useId, useRef, useState } from "react";

import { useWindowControls } from "./WindowContext";

import type { PointerEvent, ReactNode } from "react";

type RetroWindowProps = {
  visible: boolean;
  close: () => void;
  title: string;
  icon: string;
  toolbar?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  height?: number;
  width?: number;
  contentClassName?: string;
};
type Geometry = { x: number; y: number; width: number; height: number };
const fit = (
  rect: Geometry,
  bounds: { width: number; height: number },
): Geometry => {
  const width = Math.min(rect.width, Math.max(1, bounds.width - 16));
  const height = Math.min(rect.height, Math.max(1, bounds.height - 56));
  return {
    width,
    height,
    x: Math.max(8, Math.min(rect.x, bounds.width - width - 8)),
    y: Math.max(8, Math.min(rect.y, bounds.height - height - 48)),
  };
};

/** Nonmodal desktop window: background windows remain usable and drafts survive minimization. */
export function RetroWindow({
  visible,
  close,
  title,
  icon,
  toolbar,
  footer,
  children,
  height = 500,
  width = 520,
  contentClassName = "border border-black bg-white p-2 shadow-inner",
}: RetroWindowProps) {
  const managed = useWindowControls();
  const bounds = managed?.bounds;
  const getBounds = useCallback(
    () => bounds ?? { width: window.innerWidth, height: window.innerHeight },
    [bounds],
  );
  const fitWindow = useCallback(
    (rect: Geometry) => fit(rect, getBounds()),
    [getBounds],
  );
  const [localMaximized, setLocalMaximized] = useState(false);
  const [localMinimized, setLocalMinimized] = useState(false);
  const active = managed?.active ?? true;
  const minimized = managed?.minimized ?? localMinimized;
  const maximized = managed?.maximized ?? localMaximized;
  const maximize =
    managed?.maximize ?? (() => setLocalMaximized((value) => !value));
  const minimize = managed?.minimize ?? (() => setLocalMinimized(true));
  const titleId = useId();
  const windowRef = useRef<HTMLElement>(null);
  const [geometry, setGeometry] = useState<Geometry>(() =>
    fitWindow({
      x: (getBounds().width - width) / 2 + ((managed?.zIndex ?? 10) - 10) * 16,
      y:
        (getBounds().height - height - 40) / 2 +
        ((managed?.zIndex ?? 10) - 10) * 16,
      width,
      height: height + 24,
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
    if (
      visible &&
      active &&
      !minimized &&
      !windowRef.current?.contains(document.activeElement)
    )
      windowRef.current?.focus({ preventScroll: true });
  }, [visible, active, minimized, maximized]);
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
      setGeometry({
        ...current.rect,
        width: Math.max(
          Math.min(280, getBounds().width - 16),
          Math.min(
            current.rect.width + dx,
            getBounds().width - current.rect.x - 8,
          ),
        ),
        height: Math.max(
          Math.min(200, getBounds().height - 56),
          Math.min(
            current.rect.height + dy,
            getBounds().height - current.rect.y - 48,
          ),
        ),
      });
    } else
      setGeometry(
        fitWindow({
          ...current.rect,
          x: current.rect.x + dx,
          y: current.rect.y + dy,
        }),
      );
  };
  const rect = maximized
    ? { x: 0, y: 0, width: getBounds().width, height: getBounds().height - 40 }
    : geometry;
  return (
    <section
      ref={windowRef}
      role="dialog"
      aria-labelledby={titleId}
      tabIndex={-1}
      hidden={!visible || minimized}
      className="desktop-window"
      data-active={active}
      data-maximized={maximized}
      style={{
        left: rect.x,
        top: rect.y,
        width: maximized ? "100%" : rect.width,
        height: maximized ? "calc(100% - 40px)" : rect.height,
        zIndex: managed?.zIndex ?? 10,
      }}
      onPointerDownCapture={() => managed?.focus()}
      onFocusCapture={() => {
        if (!active) managed?.focus();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && active) {
          event.stopPropagation();
          close();
        }
      }}
    >
      <div
        className="desktop-titlebar"
        style={{ touchAction: "none" }}
        onDoubleClick={(event) => {
          if (!(event.target as HTMLElement).closest("button")) maximize();
        }}
        onPointerDown={startGesture}
        onPointerMove={moveGesture}
        onPointerUp={endGesture}
        onPointerCancel={endGesture}
        onLostPointerCapture={endGesture}
      >
        <img src={icon} alt="" draggable={false} />
        <span id={titleId}>{title}</span>
        <button
          type="button"
          aria-label={`Minimize ${title}`}
          onClick={minimize}
        >
          <span aria-hidden="true">−</span>
        </button>
        <button
          type="button"
          aria-label={`${maximized ? "Restore" : "Maximize"} ${title}`}
          onClick={maximize}
        >
          <span aria-hidden="true">{maximized ? "❐" : "□"}</span>
        </button>
        <button type="button" aria-label={`Close ${title}`} onClick={close}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
      {toolbar && <div className="shrink-0">{toolbar}</div>}
      <div className={`m-4 min-h-0 flex-1 overflow-auto ${contentClassName}`}>
        {children}
      </div>
      {footer && <div className="shrink-0">{footer}</div>}
      {!maximized && (
        <button
          type="button"
          className="window-resize-handle"
          aria-label={`Resize ${title}`}
          style={{ touchAction: "none" }}
          onPointerDown={(event) => startGesture(event, true)}
          onPointerMove={moveGesture}
          onPointerUp={endGesture}
          onPointerCancel={endGesture}
          onLostPointerCapture={endGesture}
          onKeyDown={(event) => {
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
                  width: Math.max(280, current.width + dx),
                  height: Math.max(200, current.height + dy),
                }),
              );
            }
          }}
        />
      )}
    </section>
  );
}
export function WindowMenu({ items }: { items: string[] }) {
  return (
    <div className="flex min-h-6 flex-wrap border text-left" aria-hidden="true">
      {items.map((item) => (
        <span key={item} className="border-r-2 px-2 font-black">
          {item}
        </span>
      ))}
    </div>
  );
}
