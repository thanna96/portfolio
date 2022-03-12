import React, { FC, useEffect, useState } from "react";
import startIcon from "../files/icons/start_main.0.jpg";

export const TaskBar: FC = function () {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [time, setTime] = useState<string>("");

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
        style={{ height: "33px" }}
        className={"float-right border border-black shadow-inner px-5"}
      >
        <p className={"mb-0 mt-0.5 text-lg"}>{time}</p>
      </div>
    </div>
  );
};
