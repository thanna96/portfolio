import React, { FC } from "react";
import { About } from "./About";
import { Banner } from "./Banner";
import { WorkExperience } from "./WorkExperience";
import { PageDivider } from "../components/PageDivider";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import workBg from "../files/images/retro-work.jpeg";
import projectBg from "../files/images/project-bg.png";
import skillsBg from "../files/images/skills-bg.jpeg";
import contactBg from "../files/images/contact-bg.jpeg";

export const Dashboard: FC = function () {
  return (
    <>
      <Banner />
      <About />
      <PageDivider
        title={"Work History"}
        subTitle={"2017 - Present"}
        id={"Work History"}
        color={"#4692B3"}
        image={workBg}
        padding={"py-6 px-16 md:py-8 md:px-24"}
        textColor={"white"}
      />
      <WorkExperience />
      <PageDivider
        title={"Projects"}
        subTitle={"Project Experience"}
        id={"Projects"}
        color={"#693971"}
        image={projectBg}
        padding={"py-6 px-16 md:py-8 md:px-24"}
        textColor={"white"}
      />
      <Projects />
      <PageDivider
        title={"Skills"}
        subTitle={"Languages + Libraries + Frameworks"}
        id={"Skills"}
        color={"#CDCDCD"}
        image={skillsBg}
        padding={"py-6 px-1 md:py-8 md:px-24"}
        textColor={"black"}
      />
      <Skills />
      <PageDivider
        title={"Contact"}
        subTitle={"Message Me To Learn More!"}
        id={"Contact"}
        image={contactBg}
        color={"#30D5C8"}
        padding={"py-6 px-10 md:py-8 md:px-24"}
        textColor={"black"}
      />
    </>
  );
};

export default Dashboard;
