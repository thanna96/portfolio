import React, { FC, useState } from "react";
import { DesktopIcon } from "./DesktopIcon";

export const DesktopIconGroup: FC<propType> = function ({ icons }: propType) {
  const [focused, setFocused] = useState<string>("");

  return (
    <div className={"m-4"}>
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
  );
};

export default DesktopIconGroup;

type propType = {
  icons: Array<{ text: string; image: string; onClick: () => void }>;
};
