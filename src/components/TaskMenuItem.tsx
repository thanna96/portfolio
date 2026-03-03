import React, { FC } from "react";

import { classNames } from "../utils/classNames";

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
      className={classNames(
        "w-full h-[20%] cursor-pointer p-1 hover:bg-blue-600 hover:text-white",
        borderTop && "border-t-4 border-[#a4a4a4]",
      )}
    >
      <img className={"inline w-[50px]"} src={icon} alt={"start menu icon"} />
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
