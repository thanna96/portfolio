import React, { FC, useEffect, useState } from "react";
// import { Layout } from "antd";
// import { PageHeader } from "./Header";
// import { Dashboard } from "../../pages/Dashboard";
import { Desktop } from "../../pages/Desktop";
import { WindowBootUp } from "../../pages/WindowBootUp";

// const { Content } = Layout;

export const MainLayout: FC = function () {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="min-h-screen bg-black">
      {/*<Layout style={{ background: "transparent" }}>*/}
      {/*<PageHeader />*/}
      {/*<Layout style={{ background: "transparent" }}>*/}
      {/*  <Content>*/}
      <div className={"centered-container h-screen"}>
        <div
          className={"w-full h-90 lg:w-3/4 lg:h-3/4 m-auto relative"}
          style={{ background: "#3A6EA5" }}
        >
          {loading ? <WindowBootUp /> : <Desktop />}
        </div>
      </div>
      {/*</Content>*/}
      {/*</Layout>*/}
      {/*</Layout>*/}
    </div>
  );
};

export default MainLayout;
