import { Modal } from "antd";
import { useEffect, useRef, useState } from "react";

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

/** Shared window chrome; Ant Design provides dialog naming, focus and Escape handling. */
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
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    position: typeof position;
    bounds: DOMRect;
    handle: HTMLDivElement;
  } | null>(null);

  const endDrag = () => {
    const active = drag.current;
    drag.current = null;
    if (active?.handle.hasPointerCapture?.(active.pointerId)) {
      active.handle.releasePointerCapture(active.pointerId);
    }
  };

  useEffect(() => {
    const resetPosition = () => {
      endDrag();
      setPosition({ x: 0, y: 0 });
    };
    window.addEventListener("resize", resetPosition);
    return () => {
      window.removeEventListener("resize", resetPosition);
      endDrag();
    };
  }, []);

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (
      drag.current ||
      event.isPrimary === false ||
      event.button !== 0 ||
      (event.target as HTMLElement).closest("button, a")
    )
      return;
    const bounds = windowRef.current?.getBoundingClientRect();
    if (!bounds) return;
    event.preventDefault();
    drag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      position,
      bounds,
      handle: event.currentTarget,
    };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    const active = drag.current;
    if (!active || active.pointerId !== event.pointerId) return;
    const { bounds, position: origin } = active;
    const minX = 8 - bounds.left + origin.x;
    const maxX = Math.max(
      minX,
      window.innerWidth - 8 - bounds.right + origin.x,
    );
    const minY = 8 - bounds.top + origin.y;
    const maxY = Math.max(
      minY,
      window.innerHeight - 8 - bounds.bottom + origin.y,
    );
    setPosition({
      x: Math.min(
        maxX,
        Math.max(minX, origin.x + event.clientX - active.startX),
      ),
      y: Math.min(
        maxY,
        Math.max(minY, origin.y + event.clientY - active.startY),
      ),
    });
  };

  return (
    <Modal
      open={visible}
      centered
      width={width}
      closable={false}
      footer={null}
      onCancel={close}
      mask={false}
      destroyOnHidden
      modalRender={(modal) => (
        <div
          ref={windowRef}
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
          {modal}
        </div>
      )}
      title={
        <div
          className="flex min-h-6 cursor-move select-none items-center gap-2 bg-blue-700 px-1 text-white"
          style={{ touchAction: "none" }}
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onLostPointerCapture={endDrag}
        >
          <img src={icon} alt="" className="h-5 shrink-0" draggable={false} />
          <span className="min-w-0 flex-1 truncate font-black">{title}</span>
          <button
            type="button"
            onClick={close}
            aria-label={`Close ${title}`}
            className="border border-blue-700 bg-[#C0C0C0] px-1 text-xs font-black text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <span aria-hidden="true">X</span>
          </button>
        </div>
      }
      styles={{
        container: {
          padding: 0,
          border: "3px solid #C0C0C0",
          background: "#C0C0C0",
          borderRadius: 0,
        },
        header: { margin: 0, padding: 0, background: "#C0C0C0" },
        body: { padding: 0 },
      }}
    >
      <div
        className="flex flex-col shadow-2xl"
        style={{ height: `min(${height}px, calc(100dvh - 100px))` }}
      >
        {toolbar && <div className="shrink-0">{toolbar}</div>}
        <div className={`m-4 min-h-0 flex-1 overflow-auto ${contentClassName}`}>
          {children}
        </div>
        {footer && <div className="shrink-0">{footer}</div>}
      </div>
    </Modal>
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
