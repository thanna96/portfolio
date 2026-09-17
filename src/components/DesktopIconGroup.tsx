import { type FC, useState } from "react";

import { DesktopIcon } from "./DesktopIcon";

import type { DesktopIconDefinition } from "../utils/desktopTypes";

export const DesktopIconGroup: FC<propType> = function ({
  icons,
  isFolder,
}: propType) {
  const [focused, setFocused] = useState<string>("");

  return (
    <div className={"m-4"}>
      <div
        className={`${
          isFolder ? "grid-rows-2" : "grid-rows-4"
        } grid-flow-col gap-2 row-span-1 inline-grid`}
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
};

export default DesktopIconGroup;

type propType = {
  icons: DesktopIconDefinition[];
  isFolder: boolean;
};
