import { classNames } from "../utils/classNames";

import type { FC } from "react";

export const TaskMenuItem: FC<propTypes> = function ({
  title,
  icon,
  borderTop,
  link,
  onNavigate,
  onActivate,
}: propTypes) {
  const Tag = onActivate ? "button" : "a";
  return (
    <Tag
      type={onActivate ? "button" : undefined}
      href={onActivate ? undefined : link}
      target={
        onActivate || link.startsWith("mailto:") || link === "/"
          ? undefined
          : "_blank"
      }
      rel="noopener noreferrer"
      onClick={() => {
        onActivate?.();
        onNavigate?.();
      }}
      className={classNames(
        "classic-start-item text-black! hover:text-white! focus-visible:text-white!",
        borderTop && "start-item-separator",
      )}
    >
      <img className="start-item-icon" src={icon} alt="" />
      <span className="start-item-label">{title}</span>
    </Tag>
  );
};
type propTypes = {
  title: string;
  icon: string;
  borderTop: boolean;
  link: string;
  onNavigate?: () => void;
  onActivate?: () => void;
};
