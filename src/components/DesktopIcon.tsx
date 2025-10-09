import React, { FC } from "react";

import { classNames } from "../utils/classNames";

export const DesktopIcon: FC<propType> = function ({
  focused,
  setFocused,
  text,
  image,
  onClick,
  isFolder,
}: propType) {
  return (
    <div
      onClick={(): void => {
        setFocused(text);
        onClick();
      }}
      className={classNames(
        "cursor-pointer relative mb-2 w-[70px]",
        isFolder && "border-black",
        focused === text && "border border-dashed",
      )}
    >
      <img className={"mx-auto h-[50px]"} src={image} alt={"start menu icon"} />
      <div className={"overflow-x-hidden mx-auto max-w-[70px]"}>
        <p
          className={classNames(
            "mb-0 text-center break-words",
            !isFolder && "text-white",
          )}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default DesktopIcon;

type propType = {
  focused: string;
  setFocused: (a: string) => void;
  text: string;
  image: string;
  onClick: () => void;
  isFolder: boolean;
};
