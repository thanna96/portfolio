import React, { FC } from "react";
import { About } from "./About";
import { Banner } from "./Banner";
import { WorkExperience } from "./WorkExperience";
import { PageDivider } from "../components/PageDivider";

export const Dashboard: FC = function () {
  return (
    <>
      <Banner />
      <About />
      <PageDivider
        title={"Work History"}
        subTitle={"2018- Present"}
        id={"Work History"}
        color={"#936D61"}
        textColor={"white"}
      />
      <WorkExperience />
      <PageDivider
        title={"Projects"}
        subTitle={"Project Experience"}
        id={"Projects"}
        color={"#5effbc"}
        textColor={"black"}
      />
      <PageDivider
        title={"Skills"}
        subTitle={"Languages + Libraries + Frameworks"}
        id={"Skills"}
        color={"#ea5735"}
        textColor={"white"}
      />
      <PageDivider
        title={"Contact"}
        subTitle={"Message Me To Learn More!"}
        id={"contact"}
        color={"#CBEFFF"}
        textColor={"black"}
      />
    </>
  );
};

export default Dashboard;
