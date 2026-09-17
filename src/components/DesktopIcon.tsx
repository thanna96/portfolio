import { classNames } from "../utils/classNames";

import type { DesktopIconDefinition } from "../utils/desktopTypes";

type DesktopIconProps = DesktopIconDefinition & {
  focused: string;
  setFocused: (id: string) => void;
  isFolder: boolean;
};

export function DesktopIcon({
  id,
  focused,
  setFocused,
  text,
  image,
  onClick,
  href,
  isFolder,
}: DesktopIconProps) {
  const selectIcon = () => setFocused(id);
  const activateIcon = () => {
    selectIcon();
    onClick?.();
  };
  const className = classNames(
    "block cursor-pointer relative mb-2 w-[80px] bg-transparent p-0 text-inherit no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700",
    isFolder && "border-black text-black!",
    focused === id && "border border-dashed",
  );
  const content = (
    <>
      <img className="mx-auto h-[50px]" src={image} alt="" />
      <span className="block overflow-x-hidden mx-auto max-w-[80px]">
        <span
          className={classNames(
            "block text-center break-words",
            isFolder ? "text-black" : "text-white",
          )}
        >
          {text}
        </span>
      </span>
    </>
  );
  if (href !== undefined) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onFocus={selectIcon}
        onClick={selectIcon}
        className={className}
      >
        {content}
      </a>
    );
  }
  return (
    <button
      type="button"
      onFocus={selectIcon}
      onClick={activateIcon}
      className={className}
    >
      {content}
    </button>
  );
}

export default DesktopIcon;
