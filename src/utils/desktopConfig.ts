import imageIcon from "../files/icons/Windows 2000 Bitmap Image-4.png";
import folderIcon from "../files/icons/Windows 2000 Closed Folder-6.png";
import computer from "../files/icons/Windows 2000 My Computer-3.png";
import documentIcon from "../files/icons/Windows 2000 Text Document-2.png";
import internet from "../files/icons/Windows 2000 The Internet-2.png";

import type { WindowId } from "./desktopTypes";

export const windowMetadata: Record<WindowId, { title: string; icon: string }> =
  {
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

export const desktopShortcuts: { id: WindowId; text: string }[] = [
  { id: "my_information", text: "My Information" },
  { id: "internet", text: "Internet Explorer" },
  { id: "my_documents", text: "My Documents" },
  { id: "my_languages", text: "Favorite Languages" },
  { id: "my_projects", text: "Projects" },
  { id: "my_bookmarks", text: "Bookmarks" },
  { id: "minesweeper", text: "Minesweeper" },
];
