import { useEffect, useRef, useState } from "react";

import { TaskBarMenu } from "./TaskBarMenu";
import soundIcon from "../files/icons/sound_icon.png";
import startIcon from "../files/icons/start_main.0.jpg";
import { useTaskbarClock } from "../hooks/useTaskbarClock";

import type { WindowId } from "../utils/desktopTypes";

type TaskBarProps = {
  onOpenResume: () => void;
  onOpenContact: () => void;
  windows?: { id: WindowId; title: string; icon: string; minimized: boolean }[];
  activeWindow?: WindowId | null;
  onWindowClick?: (id: WindowId) => void;
};

export function TaskBar({
  onOpenResume,
  onOpenContact,
  windows = [],
  activeWindow = null,
  onWindowClick,
}: TaskBarProps) {
  const [menuActive, setMenuActive] = useState(false);
  const time = useTaskbarClock();
  const navigationRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuActive) return;
    const onPointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !navigationRef.current?.contains(event.target)
      )
        setMenuActive(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuActive(false);
        startRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuActive]);

  return (
    <div ref={navigationRef}>
      {menuActive && (
        <div id="start-menu">
          <TaskBarMenu
            onOpenResume={onOpenResume}
            onOpenContact={onOpenContact}
            onNavigate={() => setMenuActive(false)}
          />
        </div>
      )}
      <div className="desktop-taskbar">
        <button
          ref={startRef}
          type="button"
          aria-label="Start"
          aria-expanded={menuActive}
          aria-controls={menuActive ? "start-menu" : undefined}
          onClick={() => setMenuActive((active) => !active)}
          className={menuActive ? "border border-dashed border-black" : ""}
        >
          <img src={startIcon} alt="" className="h-[35px]" />
        </button>
        <div className="taskbar-windows" aria-label="Open windows">
          {windows.map((item) => (
            <button
              key={item.id}
              type="button"
              className="taskbar-window"
              aria-label={`Switch to ${item.title}`}
              aria-pressed={activeWindow === item.id && !item.minimized}
              onClick={() => onWindowClick?.(item.id)}
            >
              <img src={item.icon} alt="" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
        <div className="taskbar-clock float-right h-[35px] border-2 border-[#a4a4a4] shadow-inner px-3 mr-1">
          <img
            className="mr-2 inline-block h-5 w-auto align-text-bottom"
            src={soundIcon}
            alt=""
          />
          <time className="mt-0.5 inline-block text-lg">{time}</time>
        </div>
      </div>
    </div>
  );
}
