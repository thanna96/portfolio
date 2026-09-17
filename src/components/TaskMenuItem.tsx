import { classNames } from "../utils/classNames";

import type { FC } from "react";

export const TaskMenuItem: FC<propTypes> = function ({
  title,
  icon,
  borderTop,
  link,
  onNavigate,
}: propTypes) {
  return (
    <a
      href={link}
      target={link.startsWith("mailto:") || link === "/" ? undefined : "_blank"}
      rel="noopener noreferrer"
      onClick={onNavigate}
      className={classNames(
        "block text-inherit no-underline w-full h-[20%] cursor-pointer p-1 hover:bg-blue-600 hover:text-white focus-visible:bg-blue-600 focus-visible:text-white",
        borderTop && "border-t-4 border-[#a4a4a4]",
      )}
    >
      <img className={"inline w-[50px]"} src={icon} alt="" />
      <span className={"ml-4"}>{title}</span>
    </a>
  );
};
type propTypes = {
  title: string;
  icon: string;
  borderTop: boolean;
  link: string;
  onNavigate?: () => void;
};
