"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { StartMenu } from "./TaskBarMenu";
import { desktopAssets } from "@/features/desktop/utils/iconData";

export function TaskBar() {
  const [menuActive, setMenuActive] = useState(false);
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      {menuActive ? <StartMenu onClose={() => setMenuActive(false)} /> : null}
      <div
        className="absolute bottom-0 flex w-full items-center justify-between border-t-4 border-blue-800 px-1"
        style={{ background: "#C0C0C0", height: "40px" }}
      >
        <button
          type="button"
          onClick={() => setMenuActive((previous) => !previous)}
          className={`h-[35px] border-2 ${menuActive ? "border-dashed border-black" : "border-transparent"}`}
        >
          <Image
            src={desktopAssets.startIcon}
            alt="Start menu"
            width={110}
            height={35}
            className="h-[35px] w-auto"
          />
        </button>
        <div className="flex items-center gap-2 border-2 border-[#a4a4a4] bg-white px-3 shadow-inner">
          <Image
            src={desktopAssets.soundIcon}
            alt="Speaker"
            width={20}
            height={20}
            className="h-5 w-5"
          />
          <p className="m-0 text-lg">{time}</p>
        </div>
      </div>
    </>
  );
}
