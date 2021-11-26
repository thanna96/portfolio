import React, { FC, useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { Header } from "antd/lib/layout/layout";

const MENU_ITEMS = [
  {
    name: "About Me",
    url: "/",
  },
  {
    name: "Work Experience",
    url: "/",
  },
  {
    name: "Projects",
    url: "/",
  },
  {
    name: "Skills",
    url: "/",
  },
  {
    name: "Contact",
    url: "/",
  },
  {
    name: "Resume",
    url: "/files/resume.pdf",
  },
];

export const PageHeader: FC = function () {
  const [selectedKey, setSelectedKey] = useState("About Me");
  return (
    <Header style={{ background: "transparent", padding: 0 }}>
      <Menu
        mode={"horizontal"}
        style={{
          background: "black",
          position: "relative",
          display: "flex",
          borderWidth: 0,
          justifyContent: "center",
        }}
        selectedKeys={[]}
      >
        {MENU_ITEMS.map((item) => (
          <Menu.Item
            key={item.name}
            className={"modified-item"}
            style={{ marginTop: 0 }}
            onClick={(): void => {
              setSelectedKey(item.name);
              const violation = document.getElementById(item.name);
              window.scrollTo({
                top: violation?.offsetTop,
                behavior: "smooth",
              });
            }}
          >
            <Link
              style={{
                color: selectedKey === item.name ? "white" : "#BBBBBB",
                letterSpacing: "1px",
                textDecoration: selectedKey === item.name ? "underline" : "",
              }}
              to={item.url}
            >
              {item.name}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};
