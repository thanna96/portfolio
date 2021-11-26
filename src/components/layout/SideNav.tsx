import React, { FC, useState } from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const MENU_ITEMS = [
  {
    name: "About Me",
    url: "/#about-me",
  },
  {
    name: "Work Experience",
    url: "/#work",
  },
  {
    name: "Projects",
    url: "/#projects",
  },
  {
    name: "Skills",
    url: "/#skills",
  },
  {
    name: "Contact",
    url: "/#contact",
  },
  {
    name: "Resume",
    url: "/files/resume.pdf",
  },
];
/**
 *
 * @constructor
 */
export const SideNav: FC<StatusType> = function ({
  collapsed = false,
  onClick,
}: StatusType) {
  const [selectedKey, setSelectedKey] = useState("/#about-me");
  return (
    <Sider
      className="min-h-screen"
      collapsible
      collapsed={collapsed}
      onCollapse={onClick}
    >
      <Menu mode={"inline"} theme={"dark"} selectedKeys={[selectedKey]}>
        {MENU_ITEMS.map((item) => (
          <Menu.Item
            key={item.url}
            onClick={(): void => setSelectedKey(item.url)}
          >
            <Link to={item.url}>{item.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

type StatusType = {
  collapsed: boolean;
  onClick: (o: boolean) => void;
};
