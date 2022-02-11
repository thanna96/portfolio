import React, { FC, useState } from "react";
import { DesktopIcon } from "./DesktopIcon";

export const DesktopIconGroup: FC<propType> = function ({ icons }: propType) {
  const [focused, setFocused] = useState<string>("");

  return (
    <div className={"m-4"}>
      <div
        className={"grid-rows-4 grid-flow-col gap-2 row-span-1"}
        style={{ display: "inline-grid" }}
      >
        {icons.map((icon) => {
          return (
            <DesktopIcon
              key={icon.text}
              focused={focused}
              setFocused={setFocused}
              image={icon.image}
              text={icon.text}
              onClick={icon.onClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DesktopIconGroup;

type propType = {
  icons: Array<{ text: string; image: string; onClick: () => void }>;
};
