import React, { FC } from "react";

export const TaskMenuItem: FC<propTypes> = function ({
  title,
  icon,
  borderTop,
  link,
}: propTypes) {
  const openPage = (page: string): void => {
    window.open(page);
  };
  return (
    <div
      onClick={(): void => openPage(link)}
      className={`w-full p-1 hover:bg-blue-600 hover:text-white cursor-pointer ${
        borderTop && "border-t-4"
      }`}
      style={{
        borderColor: "#a4a4a4",
        height: "20%",
        bottom: "40px",
      }}
    >
      <img
        className={"inline"}
        src={icon}
        alt={"start menu icon"}
        style={{ width: "50px" }}
      />
      <span className={"ml-4"}>{title}</span>
    </div>
  );
};
type propTypes = {
  title: string;
  icon: string;
  borderTop: boolean;
  link: string;
};
