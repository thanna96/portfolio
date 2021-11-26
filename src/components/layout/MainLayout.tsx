import React, { FC } from "react";
import { Layout } from "antd";
import { PageHeader } from "./Header";
import { Dashboard } from "../../pages/Dashboard";

const { Content } = Layout;

export const MainLayout: FC = function () {
  return (
    <div className="min-h-screen">
      <Layout style={{ background: "transparent" }}>
        <PageHeader />
        <Layout style={{ background: "transparent" }}>
          <Content>
            <Dashboard />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
