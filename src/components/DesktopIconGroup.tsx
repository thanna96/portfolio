import { useState } from "react";

import { DesktopIcon } from "./DesktopIcon";

import type { DesktopIconDefinition } from "../utils/desktopTypes";

export function DesktopIconGroup({ icons, isFolder }: DesktopIconGroupProps) {
  const rowClassName = isFolder ? "grid-rows-2" : "grid-rows-4";
  const [focused, setFocused] = useState<string>("");

  return (
    <div className="m-4">
      <div
        className={`${rowClassName} grid-flow-col gap-2 row-span-1 inline-grid`}
      >
        {icons.map((icon) => (
          <DesktopIcon
            isFolder={isFolder}
            key={icon.id}
            focused={focused}
            setFocused={setFocused}
            {...icon}
          />
        ))}
      </div>
    </div>
  );
}

export default DesktopIconGroup;

type DesktopIconGroupProps = {
  icons: DesktopIconDefinition[];
  isFolder: boolean;
};
