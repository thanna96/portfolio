import { TaskMenuItem } from "./TaskMenuItem";
import linkedin from "../files/icons/linkedin.png";
import twitter from "../files/icons/twitter.png";
import folder from "../files/icons/Windows 2000 Closed Folder-6.png";
import computer from "../files/icons/Windows 2000 My Computer-3.png";
import textDocument from "../files/icons/Windows 2000 Text Document-2.png";

import type { FC } from "react";

const menuItems = [
  {
    id: "contact",
    title: "Contact",
    icon: textDocument,
    link: "mailto:thanna96@gmail.com",
    borderTop: false,
  },
  {
    id: "resume",
    title: "Resume",
    icon: folder,
    link: "/Thomas_Hanna_Resume.pdf",
    borderTop: false,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/thomashanna96/",
    borderTop: true,
  },
  {
    id: "twitter",
    title: "Twitter",
    icon: twitter,
    link: "https://twitter.com/ThomasHanna96",
    borderTop: false,
  },
  {
    id: "shutdown",
    title: "Shut Down",
    icon: computer,
    link: "/",
    borderTop: true,
  },
];

export const TaskBarMenu: FC<{ onNavigate?: () => void }> = function ({
  onNavigate,
}) {
  return (
    <div
      aria-label="Start menu"
      className="absolute bottom-10 m-0 w-11/12 min-h-[300px] p-0.5 sm:w-2/3 md:w-1/3 lg:w-1/4 bg-[#C0C0C0] border-[3px] border-[#a4a4a4]"
      style={{ height: "50%" }}
    >
      {menuItems.map(({ id, ...item }) => (
        <TaskMenuItem key={id} {...item} onNavigate={onNavigate} />
      ))}
    </div>
  );
};
