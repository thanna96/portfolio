import React, { FC } from "react";
import Avatar from "antd/es/avatar/avatar";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

export const Banner: FC = function () {
  return (
    <div className={"centered-container"} style={{ background: "#548d6c" }}>
      <div className={"text-center m-auto"}>
        <h1 className={"text-white text-3xl"}>Thomas Hanna</h1>
        <h2 className={"text-white text-2xl italic"}>
          Software Developer / Programmer
        </h2>
        <div>
          <a
            href={"https://www.linkedin.com/in/thomashanna96/"}
            target="_blank"
            rel="noreferrer"
          >
            <Avatar
              style={{ background: "transparent" }}
              className={"cursor-pointer"}
              size="large"
              icon={<LinkedinOutlined />}
            />
          </a>
          <a
            href={"https://github.com/thanna96"}
            target="_blank"
            rel="noreferrer"
          >
            <Avatar
              style={{ background: "transparent" }}
              className={"cursor-pointer"}
              size="large"
              icon={<GithubOutlined />}
            />
          </a>
          <a
            href={"mailto:thanna96@gmail.com"}
            target="_blank"
            rel="noreferrer"
          >
            <Avatar
              style={{ background: "transparent" }}
              className={"cursor-pointer"}
              size="large"
              icon={<MailOutlined />}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
