import { RetroWindow, WindowMenu } from "./RetroWindow";

type MyInformationWindowProps = {
  icon: string;
  visible: boolean;
  close: () => void;
};

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
      toolbar={<WindowMenu items={["File", "Edit", "View"]} />}
      footer={
        <div className="flex justify-end gap-1 px-2 pb-2">
          <button
            type="button"
            onClick={close}
            className="h-8 w-20 border border-black px-1 text-xs font-black"
          >
            OK
          </button>
          <button
            type="button"
            onClick={close}
            className="h-8 w-20 border border-black px-1 text-xs font-black"
          >
            Cancel
          </button>
        </div>
      }
    >
      <h1 className={"text-xl"}>Registered To:</h1>
      <p className={"ml-4 !mb-0"}>
        <b>Name:</b>Thomas Hanna
      </p>
      <p className={"ml-4 !mb-0"}>
        <b>Job:</b>Web Developer
      </p>
      <p className={"ml-4 !mb-0"}>
        <b>Age:</b>
        {getAge(new Date())}
      </p>
      <p className={"ml-4 !mb-0"}>
        <b>Location:</b>NYC Metro Area
      </p>
      <p className={"ml-4 !mb-0"}>
        <b>Email:</b>THanna96@gmail.com
      </p>
      <p className={"ml-4 !mb-0"}>
        <b>About:</b>
      </p>
      <p className={"ml-4 !mb-0"}>
        Detail-oriented Front End Developer with 4+ years of experience
        designing, developing, and deploying high-performance, responsive web
        applications. Skilled in React.js, TypeScript, and Next.js with strong
        expertise in state management, component architecture, and front-end
        performance optimization. Adept at collaborating with cross-functional
        teams in Agile environments to deliver scalable, accessible, and
        SEO-optimized digital products. Demonstrated success in migrating legacy
        codebases, building reusable UI libraries, and improving load times and
        user engagement through modern web technologies and CI/CD pipelines.
      </p>
      <p className={"ml-4 mb-0"}>
        My interest in programming in web development officially started around
        2015, I was struggling to find a career path in my first year of college
        and had no direction, I passed my first semester and was considering
        leaving and pursuing something else. Then, in my second semester I took
        a Java programming class and realized something, programming was
        something I enjoyed so much.
      </p>
      <p className={"ml-4 mb-0"}>
        Fast forward years later and I am currently working as a web developer
        and I could not be happier. I primarily do front end work with JS using
        React and Angular but I am also open to back end dev too!
      </p>
    </RetroWindow>
  );
}

export default MyInformationWindow;
