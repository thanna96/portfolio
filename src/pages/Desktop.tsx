import { type FC, lazy, Suspense, useState } from "react";

import { DesktopIconGroup } from "../components/DesktopIconGroup";
import {
  bookmarkIcons,
  languageIcons,
  myDocsIcons,
  projectIcons,
} from "../components/iconsFolder";
import { TaskBar } from "../components/TaskBar";
import folderIcon from "../files/icons/Windows 2000 Closed Folder-6.png";
import computer from "../files/icons/Windows 2000 My Computer-3.png";
import internet from "../files/icons/Windows 2000 The Internet-2.png";
import {
  closeWindow,
  openWindow,
  type DesktopIconDefinition,
  type WindowId,
} from "../utils/desktopTypes";

const ExplorerWindow = lazy(
  () => import("../components/windows/ExplorerWindow"),
);
const FolderMenu = lazy(() =>
  import("../components/windows/FolderMenu").then((module) => ({
    default: module.FolderMenu,
  })),
);
const MyInformationWindow = lazy(() =>
  import("../components/windows/MyInformationWindow").then((module) => ({
    default: module.MyInformationWindow,
  })),
);

export const Desktop: FC = function () {
  const [openedWindows, setOpenedWindows] = useState<WindowId[]>([]);
  const open = (id: WindowId): void =>
    setOpenedWindows((windows) => openWindow(windows, id));
  const close = (id: WindowId): void =>
    setOpenedWindows((windows) => closeWindow(windows, id));
  const icons: DesktopIconDefinition[] = [
    {
      id: "my_information",
      text: "My Information",
      image: computer,
      onClick: () => open("my_information"),
    },
    {
      id: "internet",
      text: "Internet Explorer",
      image: internet,
      onClick: () => open("internet"),
    },
    {
      id: "my_documents",
      text: "My Documents",
      image: folderIcon,
      onClick: () => open("my_documents"),
    },
    {
      id: "my_languages",
      text: "Favorite Languages",
      image: folderIcon,
      onClick: () => open("my_languages"),
    },
    {
      id: "my_projects",
      text: "Projects",
      image: folderIcon,
      onClick: () => open("my_projects"),
    },
    {
      id: "my_bookmarks",
      text: "Bookmarks",
      image: folderIcon,
      onClick: () => open("my_bookmarks"),
    },
  ];
  return (
    <>
      <DesktopIconGroup icons={icons} isFolder={false} />
      <TaskBar />
      <Suspense
        fallback={
          <p role="status" className="absolute bottom-12 left-4 text-white">
            Opening window…
          </p>
        }
      >
        {openedWindows.includes("my_information") && (
          <MyInformationWindow
            close={() => close("my_information")}
            icon={computer}
            visible={true}
          />
        )}
        {openedWindows.includes("internet") && (
          <ExplorerWindow
            close={() => close("internet")}
            icon={internet}
            visible={true}
          />
        )}
        {openedWindows.includes("my_documents") && (
          <FolderMenu
            icons={myDocsIcons}
            close={() => close("my_documents")}
            title={"My Documents"}
            visible={true}
          />
        )}
        {openedWindows.includes("my_languages") && (
          <FolderMenu
            icons={languageIcons}
            close={() => close("my_languages")}
            title={"Favorite Languages"}
            visible={true}
          />
        )}
        {openedWindows.includes("my_projects") && (
          <FolderMenu
            icons={projectIcons}
            close={() => close("my_projects")}
            title={"My Projects"}
            visible={true}
          />
        )}
        {openedWindows.includes("my_bookmarks") && (
          <FolderMenu
            icons={bookmarkIcons}
            close={() => close("my_bookmarks")}
            title={"Bookmarks"}
            visible={true}
          />
        )}
      </Suspense>
    </>
  );
};

export default Desktop;
