import React, { FC } from "react";

import { TaskMenuItem } from "./TaskMenuItem";
import linkedin from "../files/icons/linkedin.png";
import twitter from "../files/icons/twitter.png";
import folder from "../files/icons/Windows 2000 Closed Folder-6.png";
import computer from "../files/icons/Windows 2000 My Computer-3.png";
import textDocument from "../files/icons/Windows 2000 Text Document-2.png";

export const TaskBarMenu: FC = function () {
  return (
    <div
      className={
        "absolute bottom-10 m-0 w-11/12 min-h-[300px] p-0.5 sm:w-2/3 md:w-1/3 lg:w-1/4 bg-[#C0C0C0] border-[3px] border-[#a4a4a4]"
      }
      style={{ height: "50%" }}
    >
      <TaskMenuItem
        title={"Contact"}
        borderTop={false}
        icon={textDocument}
        link={"mailto:thanna96@gmail.com"}
      />
      <TaskMenuItem
        title={"Resume"}
        borderTop={false}
        icon={folder}
        link={"/Thomas_Hanna_Resume.pdf"}
      />
      <TaskMenuItem
        title={"LinkedIn"}
        borderTop={true}
        icon={linkedin}
        link={"https://www.linkedin.com/in/thomashanna96/"}
      />
      <TaskMenuItem
        title={"Twitter"}
        borderTop={false}
        icon={twitter}
        link={"https://twitter.com/ThomasHanna96"}
      />
      <TaskMenuItem
        title={"Shut Down"}
        borderTop={true}
        icon={computer}
        link={"/"}
      />
    </div>
  );
};
