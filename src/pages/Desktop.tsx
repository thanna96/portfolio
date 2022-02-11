import React, { FC, useState } from "react";
import { TaskBar } from "../components/TaskBar";
import { DesktopIconGroup } from "../components/DesktopIconGroup";
import folderIcon from "../files/icons/Windows 2000 Closed Folder-6.png";
import internet from "../files/icons/Windows 2000 The Internet-2.png";
import computer from "../files/icons/Windows 2000 My Computer-3.png";
import { MyInformationWindow } from "../components/windows/MyInformationWindow";

export const Desktop: FC = function () {
  const [openedWindows, setOpenedWindows] = useState<Array<string>>([]);
  const icons = [
    {
      text: "My Information",
      image: computer,
      onClick: (): void => {
        setOpenedWindows([...openedWindows, "my_information"]);
        return;
      },
    },
    {
      text: "Internet Explorer",
      image: internet,
      onClick: (): void => {
        window.open("https://www.spacejam.com/1996/", "_blank");
      },
    },
    {
      text: "My Documents",
      image: folderIcon,
      onClick: (): void => {
        return;
      },
    },
    {
      text: "Projects",
      image: folderIcon,
      onClick: (): void => {
        return;
      },
    },
    {
      text: "Bookmarks",
      image: folderIcon,
      onClick: (): void => {
        return;
      },
    },
    {
      text: "Classes",
      image: folderIcon,
      onClick: (): void => {
        return;
      },
    },
  ];
  return (
    <>
      <DesktopIconGroup icons={icons} />
      <TaskBar />
      <MyInformationWindow
        close={(): void =>
          setOpenedWindows(
            [...openedWindows].filter((window) => window !== "my_information")
          )
        }
        icon={computer}
        visible={openedWindows.includes("my_information")}
      />
    </>
  );
};

export default Desktop;