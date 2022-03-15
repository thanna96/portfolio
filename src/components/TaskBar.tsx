import React, { FC, useEffect, useState } from "react";
import startIcon from "../files/icons/start_main.0.jpg";
import soundIcon from "../files/icons/sound_icon.png";
import { TaskBarMenu } from "./TaskBarMenu";

export const TaskBar: FC = function () {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    setInterval(
      () =>
        setTime(
          new Date().toLocaleTimeString("en-us", {
            hour: "2-digit",
            minute: "2-digit",
          })
        ),
      1000
    );
    return (): void => clearInterval();
  }, []);
  return (
    <>
      {menuActive && <TaskBarMenu />}
      <div
        className={"w-full m-0 absolute bottom-0 py-0.5"}
        style={{ background: "#C0C0C0", height: "40px" }}
      >
        <button
          onClick={(): void => setMenuActive(!menuActive)}
          className={`${menuActive && "border border-dashed border-black"}`}
        >
          <img
            src={startIcon}
            alt={"start menu icon"}
            style={{ height: "35px" }}
          />
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
          <p className={"mb-0 mt-0.5 text-lg inline-block"}>{time}</p>
        </div>
      </div>
    </>
  );
};
