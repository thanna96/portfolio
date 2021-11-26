import React, { FC, useState } from "react";
import { Layout } from "antd";
import { SideNav } from "./SideNav";
import { Dashboard } from "../../pages/Dashboard";

const { Content } = Layout;
/**
 *
 * @constructor
 */
export const MainLayout: FC = function () {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (o: boolean): void => {
    setCollapsed(o);
  };
  return (
    <div className="min-h-screen">
      <Layout>
        <SideNav collapsed={collapsed} onClick={onCollapse} />
        <Layout>
          <Content>
            <Dashboard />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
