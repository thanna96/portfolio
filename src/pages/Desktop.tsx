import {
  type FC,
  lazy,
  Suspense,
  useReducer,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { DesktopIconGroup } from "../components/DesktopIconGroup";
import {
  bookmarkIcons,
  languageIcons,
  getMyDocsIcons,
  projectIcons,
} from "../components/iconsFolder";
import { TaskBar } from "../components/TaskBar";
import { WindowContext } from "../components/windows/WindowContext";
import imageIcon from "../files/icons/Windows 2000 Bitmap Image-4.png";
import folderIcon from "../files/icons/Windows 2000 Closed Folder-6.png";
import computer from "../files/icons/Windows 2000 My Computer-3.png";
import documentIcon from "../files/icons/Windows 2000 Text Document-2.png";
import internet from "../files/icons/Windows 2000 The Internet-2.png";
import {
  type DesktopIconDefinition,
  type WindowId,
} from "../utils/desktopTypes";
import { initialWindows, windowReducer } from "../utils/windowManager";

const MinesweeperWindow = lazy(
  () => import("../components/windows/MinesweeperWindow"),
);
const ContactWindow = lazy(() => import("../components/windows/ContactWindow"));
const ResumeWindow = lazy(() => import("../components/windows/ResumeWindow"));
const PaintWindow = lazy(() => import("../components/windows/PaintWindow"));
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
  const surface = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useLayoutEffect(() => {
    const element = surface.current;
    if (!element) return;
    const measure = () =>
      setBounds({
        width: element.clientWidth || window.innerWidth,
        height: element.clientHeight,
      });
    measure();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const [windows, dispatch] = useReducer(windowReducer, initialWindows);
  const open = (id: WindowId) => dispatch({ type: "open", id });
  const close = (id: WindowId) => dispatch({ type: "close", id });
  const metadata: Record<WindowId, { title: string; icon: string }> = {
    minesweeper: { title: "Minesweeper", icon: "/minesweeper.svg" },
    my_information: { title: "About This Person", icon: computer },
    internet: { title: "Internet Explorer", icon: internet },
    my_documents: { title: "My Documents", icon: folderIcon },
    my_languages: { title: "Favorite Languages", icon: folderIcon },
    my_projects: { title: "My Projects", icon: folderIcon },
    my_bookmarks: { title: "Bookmarks", icon: folderIcon },
    contact: { title: "New Message - Outlook Express", icon: documentIcon },
    resume: { title: "Thomas Hanna Resume", icon: documentIcon },
    profile_picture: { title: "Profile Picture - Paint", icon: imageIcon },
  };
  const renderWindow = (id: WindowId) => {
    const props = { visible: true, close: () => close(id) };
    switch (id) {
      case "minesweeper":
        return <MinesweeperWindow {...props} />;
      case "my_information":
        return <MyInformationWindow {...props} icon={computer} />;
      case "internet":
        return <ExplorerWindow {...props} icon={internet} />;
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
            title={metadata[id].title}
            icons={
              id === "my_documents"
                ? getMyDocsIcons(
                    () => open("profile_picture"),
                    () => open("resume"),
                  )
                : id === "my_languages"
                  ? languageIcons
                  : id === "my_projects"
                    ? projectIcons
                    : bookmarkIcons
            }
          />
        );
    }
  };
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
    {
      id: "minesweeper",
      text: "Minesweeper",
      image: "/minesweeper.svg",
      onClick: () => open("minesweeper"),
    },
  ];
  return (
    <div ref={surface} className="desktop-surface">
      <DesktopIconGroup icons={icons} isFolder={false} />
      <TaskBar
        windows={windows.opened.map((id) => ({
          id,
          ...metadata[id],
          minimized: windows.minimized.includes(id),
        }))}
        activeWindow={windows.active}
        onWindowClick={(id) => dispatch({ type: "taskbar", id })}
        onOpenResume={() => open("resume")}
        onOpenContact={() => open("contact")}
      />
      {windows.opened.map((id) => (
        <WindowContext.Provider
          key={id}
          value={{
            bounds,
            active: windows.active === id,
            minimized: windows.minimized.includes(id),
            maximized: windows.maximized.includes(id),
            zIndex: 10 + windows.order.indexOf(id),
            focus: () => dispatch({ type: "focus", id }),
            minimize: () => dispatch({ type: "minimize", id }),
            maximize: () => dispatch({ type: "maximize", id }),
          }}
        >
          <Suspense fallback={null}>
            {renderWindow(id)}
          </Suspense>
        </WindowContext.Provider>
      ))}
    </div>
  );
};

export default Desktop;
