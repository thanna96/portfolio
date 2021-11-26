import React, { FC } from "react";
import { About } from "./About";
import { Banner } from "./Banner";

export const Dashboard: FC = function () {
  return (
    <>
      <Banner />
      <About />
    </>
  );
};

export default Dashboard;
