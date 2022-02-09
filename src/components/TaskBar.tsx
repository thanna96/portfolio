import React, { FC, useState } from "react";
import startIcon from "../files/icons/start_main.0.jpg";

export const TaskBar: FC = function () {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <div
      className={"w-full m-0 absolute bottom-0"}
      style={{ background: "#C0C0C0", height: "40px" }}
    >
      <button
        onClick={(): void => setMenuActive(!menuActive)}
        className={`${menuActive && "border border-dashed border-black"}`}
      >
        <img
          src={startIcon}
          alt={"start menu icon"}
          style={{ height: "38px" }}
        />
      </button>
    </div>
  );
};

export default TaskBar;
