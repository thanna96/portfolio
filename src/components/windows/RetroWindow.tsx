import { useEffect, useId, useRef, useState } from "react";

import { useWindowControls } from "./WindowContext";
import { useWindowGeometry } from "../../hooks/useWindowGeometry";

import type { KeyboardEvent, MouseEvent, ReactNode } from "react";

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
  const { geometry, dragHandlers, resizeHandlers } = useWindowGeometry({
    width,
    height,
    minimized,
    maximized,
    bounds: managed?.bounds,
    cascadeOffset: ((managed?.zIndex ?? 10) - 10) * 16,
  });
  useEffect(() => {
    if (
      visible &&
      active &&
      !minimized &&
      !windowRef.current?.contains(document.activeElement)
    ) {
      windowRef.current?.focus({ preventScroll: true });
    }
  }, [visible, active, minimized, maximized]);
  const focusWindow = () => managed?.focus();
  const focusInactiveWindow = () => {
    if (!active) focusWindow();
  };
  const closeWithEscape = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape" && active) {
      event.stopPropagation();
      close();
    }
  };
  const toggleMaximizeWithTitle = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target as HTMLElement).closest("button")) maximize();
  };
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
        left: maximized ? 0 : geometry.x,
        top: maximized ? 0 : geometry.y,
        width: maximized ? "100%" : geometry.width,
        height: maximized ? "calc(100% - 40px)" : geometry.height,
        zIndex: managed?.zIndex ?? 10,
      }}
      onPointerDownCapture={focusWindow}
      onFocusCapture={focusInactiveWindow}
      onKeyDown={closeWithEscape}
    >
      <div
        className="desktop-titlebar"
        style={{ touchAction: "none" }}
        onDoubleClick={toggleMaximizeWithTitle}
        {...dragHandlers}
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
          {...resizeHandlers}
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
