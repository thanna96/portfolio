import { lazy } from "react";

import { windowMetadata } from "../../utils/desktopConfig";
import {
  bookmarkIcons,
  languageIcons,
  getMyDocsIcons,
  projectIcons,
} from "../iconsFolder";

import type { WindowId } from "../../utils/desktopTypes";

type DesktopWindowProps = {
  id: WindowId;
  onClose: () => void;
  onOpen: (id: WindowId) => void;
};

const MinesweeperWindow = lazy(() => import("./MinesweeperWindow"));
const ContactWindow = lazy(() => import("./ContactWindow"));
const ResumeWindow = lazy(() => import("./ResumeWindow"));
const PaintWindow = lazy(() => import("./PaintWindow"));
const ExplorerWindow = lazy(() => import("./ExplorerWindow"));
const FolderMenu = lazy(() =>
  import("./FolderMenu").then((module) => ({
    default: module.FolderMenu,
  })),
);
const MyInformationWindow = lazy(() =>
  import("./MyInformationWindow").then((module) => ({
    default: module.MyInformationWindow,
  })),
);

function getFolderIcons(id: WindowId, onOpen: (id: WindowId) => void) {
  switch (id) {
    case "my_documents":
      return getMyDocsIcons(
        () => onOpen("profile_picture"),
        () => onOpen("resume"),
      );
    case "my_languages":
      return languageIcons;
    case "my_projects":
      return projectIcons;
    default:
      return bookmarkIcons;
  }
}

export function DesktopWindow({ id, onClose, onOpen }: DesktopWindowProps) {
  const props = { visible: true, close: onClose };
  switch (id) {
    case "minesweeper":
      return <MinesweeperWindow {...props} />;
    case "my_information":
      return (
        <MyInformationWindow
          {...props}
          icon={windowMetadata.my_information.icon}
        />
      );
    case "internet":
      return <ExplorerWindow {...props} icon={windowMetadata.internet.icon} />;
    case "contact":
      return <ContactWindow {...props} />;
    case "resume":
      return <ResumeWindow {...props} />;
    case "profile_picture":
      return <PaintWindow {...props} />;
    default:
      return (
        <FolderMenu
          {...props}
          title={windowMetadata[id].title}
          icons={getFolderIcons(id, onOpen)}
        />
      );
  }
}
