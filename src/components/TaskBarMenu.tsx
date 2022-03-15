import React, { FC } from "react";
import { TaskMenuItem } from "./TaskMenuItem";
import computer from "../files/icons/Windows 2000 My Computer-3.png";
import textDocument from "../files/icons/Windows 2000 Text Document-2.png";
import folder from "../files/icons/Windows 2000 Closed Folder-6.png";
import twitter from "../files/icons/twitter.png";
import linkedin from "../files/icons/linkedin.png";

export const TaskBarMenu: FC = function () {
  return (
    <div
      className={"m-0 absolute p-0.5 w-11/12 sm:w-2/3 md:w-1/3 lg:w-1/4"}
      style={{
        border: "3px solid #a4a4a4",
        height: "50%",
        minHeight: "300px",
        bottom: "40px",
        background: "#C0C0C0",
      }}
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
