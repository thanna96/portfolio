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
        "classic-start-item text-black! hover:text-white! focus-visible:text-white!",
        borderTop && "start-item-separator",
      )}
    >
      <img className="start-item-icon" src={icon} alt="" />
      <span className="start-item-label">{title}</span>
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
