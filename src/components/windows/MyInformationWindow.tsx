import { RetroWindow } from "./RetroWindow";

import type { WindowProps } from "./windowTypes";

type MyInformationWindowProps = WindowProps & { icon: string };

export function getAge(today: Date) {
  const birthdayHasPassed =
    today.getMonth() > 2 || (today.getMonth() === 2 && today.getDate() >= 15);
  return today.getFullYear() - 1996 - (birthdayHasPassed ? 0 : 1);
}

export function MyInformationWindow({
  visible,
  icon,
  close,
}: MyInformationWindowProps) {
  return (
    <RetroWindow
      visible={visible}
      close={close}
      title="About This Person"
      icon={icon}
      contentClassName="about-properties"
      footer={
        <div className="flex justify-end gap-1 px-2 pb-2">
          <button
            type="button"
            onClick={close}
            className="classic-dialog-button"
          >
            OK
          </button>
          <button
            type="button"
            onClick={close}
            className="classic-dialog-button"
          >
            Cancel
          </button>
        </div>
      }
    >
      <div className="properties-tab">
        <span>General</span>
      </div>
      <section className="properties-panel" aria-label="General information">
        <header className="properties-heading">
          <img src={icon} alt="" />
          <div>
            <h1>Thomas Hanna</h1>
            <p>Web Developer</p>
            <p>Personal Information</p>
          </div>
        </header>
        <div className="properties-divider" />
        <fieldset className="properties-group">
          <legend>Registered to</legend>
          <dl className="properties-details">
            <dt>Name:</dt>
            <dd>Thomas Hanna</dd>
            <dt>Job:</dt>
            <dd>Web Developer</dd>
            <dt>Age:</dt>
            <dd>{getAge(new Date())}</dd>
            <dt>Location:</dt>
            <dd>NYC Metro Area</dd>
            <dt>Email:</dt>
            <dd>THanna96@gmail.com</dd>
          </dl>
        </fieldset>
        <fieldset className="properties-group properties-about">
          <legend>About</legend>
          <p>
            Detail-oriented Front End Developer with 4+ years of experience
            designing, developing, and deploying high-performance, responsive
            web applications. Skilled in React.js, TypeScript, and Next.js with
            strong expertise in state management, component architecture, and
            front-end performance optimization. Adept at collaborating with
            cross-functional teams in Agile environments to deliver scalable,
            accessible, and SEO-optimized digital products. Demonstrated success
            in migrating legacy codebases, building reusable UI libraries, and
            improving load times and user engagement through modern web
            technologies and CI/CD pipelines.
          </p>
          <p>
            My interest in programming in web development officially started
            around 2015, I was struggling to find a career path in my first year
            of college and had no direction, I passed my first semester and was
            considering leaving and pursuing something else. Then, in my second
            semester I took a Java programming class and realized something,
            programming was something I enjoyed so much.
          </p>
          <p>
            Fast forward years later and I am currently working as a web
            developer and I could not be happier. I primarily do front end work
            with JS using React and Angular but I am also open to back end dev
            too!
          </p>
        </fieldset>
      </section>
    </RetroWindow>
  );
}

export default MyInformationWindow;
