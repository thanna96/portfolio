import { useEffect, useRef, useState } from "react";

import { TaskBarMenu } from "./TaskBarMenu";
import soundIcon from "../files/icons/sound_icon.png";
import startIcon from "../files/icons/start_main.0.jpg";

const formatTime = () =>
  new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

export function TaskBar({
  onOpenResume,
  onOpenContact,
}: {
  onOpenResume: () => void;
  onOpenContact: () => void;
}) {
  const [menuActive, setMenuActive] = useState(false);
  const [time, setTime] = useState(formatTime);
  const navigationRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let interval: number | undefined;
    const timeout = window.setTimeout(
      () => {
        setTime(formatTime());
        interval = window.setInterval(() => setTime(formatTime()), 60000);
      },
      60000 - (Date.now() % 60000),
    );
    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);

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
      <div className="absolute bottom-0 left-0 w-full bg-[#C0C0C0] py-0.5 h-10">
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
        <div className="float-right h-[35px] border-2 border-[#a4a4a4] shadow-inner px-3 mr-1">
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
