import React, { FC, useEffect, useState } from "react";

import { TaskBarMenu } from "./TaskBarMenu";
import soundIcon from "../files/icons/sound_icon.png";
import startIcon from "../files/icons/start_main.0.jpg";

export const TaskBar: FC = function () {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);
  return (
    <>
      {menuActive && <TaskBarMenu />}
      <div
        className={"absolute bottom-0 left-0 w-full bg-[#C0C0C0] py-0.5 h-10"}
      >
        <button
          onClick={(): void => setMenuActive(!menuActive)}
          className={`${menuActive && "border border-dashed border-black"}`}
        >
          <img src={startIcon} alt={"start menu icon"} className={"h-[35px]"} />
        </button>
        <div
          style={{ height: "35px", borderColor: "#a4a4a4", borderWidth: "2px" }}
          className={"float-right border shadow-inner px-3 mr-1"}
        >
          <img
            className={"mr-2"}
            src={soundIcon}
            style={{
              height: "20px",
              display: "inline-block",
              verticalAlign: "text-bottom",
            }}
            alt={"speaker"}
          />
          <p className={"mt-0.5 inline-block text-lg"}>{time}</p>
        </div>
      </div>
    </>
  );
};
