import { Modal } from "antd";

import type { ReactNode } from "react";

type RetroWindowProps = {
  visible: boolean;
  close: () => void;
  title: string;
  icon: string;
  toolbar?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  height?: number;
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
}: RetroWindowProps) {
  return (
    <Modal
      open={visible}
      centered
      closable={false}
      footer={null}
      onCancel={close}
      mask={false}
      destroyOnHidden
      title={
        <div className="flex min-h-6 items-center gap-2 bg-blue-700 px-1 text-white">
          <img src={icon} alt="" className="h-5 shrink-0" />
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
        <div className="m-4 min-h-0 flex-1 overflow-auto border border-black bg-white p-2 shadow-inner">
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
