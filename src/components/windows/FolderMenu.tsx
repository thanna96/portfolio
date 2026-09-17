import { RetroWindow, WindowMenu } from "./RetroWindow";
import folderIcon from "../../files/icons/Windows 2000 Closed Folder-6.png";
import removableDriveIcon from "../../files/icons/Windows 2000 Removable Drive-2.png";
import { DesktopIconGroup } from "../DesktopIconGroup";

import type { ComponentProps } from "react";

type FolderMenuProps = {
  visible: boolean;
  title: string;
  close: () => void;
  icons: ComponentProps<typeof DesktopIconGroup>["icons"];
};

export function FolderMenu({ visible, close, title, icons }: FolderMenuProps) {
  return (
    <RetroWindow
      visible={visible}
      close={close}
      title={title}
      icon={folderIcon}
      height={400}
      toolbar={
        <>
          <WindowMenu items={["File", "Edit", "View"]} />
          <div className="flex min-h-6 w-full border text-left">
            <span className="border-r-2 px-2 font-black">Address:</span>
            <div className="min-w-0 flex-1 bg-white shadow-inner">
              <img
                className="ml-1 inline-block h-5"
                src={removableDriveIcon}
                alt=""
              />
              <span className="ml-2 break-words">C: \ {title} \</span>
            </div>
          </div>
        </>
      }
      footer={
        <div className="flex min-h-6 flex-wrap border-t border-black text-left">
          <span className="border-r-2 px-2 font-black">
            {icons.length} Objects
          </span>
          <span className="border-r-2 px-2 font-black">
            {(icons.length * 6.9).toFixed(2)} MB
          </span>
          <span className="ml-auto border-l-2 px-2 font-black">
            <img className="inline-block h-5" src={folderIcon} alt="" />
            <span className="ml-2">{title}</span>
          </span>
        </div>
      }
    >
      <DesktopIconGroup icons={icons} isFolder />
    </RetroWindow>
  );
}
