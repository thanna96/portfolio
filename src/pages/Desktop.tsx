import React, { FC } from "react";
import { TaskBar } from "../components/TaskBar";
import { DesktopIconGroup } from "../components/DesktopIconGroup";
import folderIcon from "../files/icons/Windows 2000 Closed Folder-6.png";
import internet from "../files/icons/Windows 2000 The Internet-2.png";
import computer from "../files/icons/Windows 2000 My Computer-3.png";

export const Desktop: FC = function () {
  const icons = [
    {
      text: "My Information",
      image: computer,
      onClick: (): void => {
        return;
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
    {
      text: "Internet Explorer",
      image: internet,
      onClick: (): void => {
        window.open("https://www.spacejam.com/1996/", "_blank");
      },
    },
  ];
  return (
    <>
      <DesktopIconGroup icons={icons} />
      <TaskBar />
    </>
  );
};

export default Desktop;
