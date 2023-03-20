import textDocument from "../files/icons/Windows 2000 Text Document-2.png";
import imageFile from "../files/icons/Windows 2000 Bitmap Image-4.png";
import profile from "../files/images/profile_picture.jpg";
import bookmarkIcon from "../files/icons/Windows 2000 Internet Document-5.png";

export const myDocsIcons = [
  {
    text: "My Resume",
    image: textDocument,
    onClick: (): void => {
      window.open("Thomas_Hanna_Resume.pdf", "_blank");
      return;
    },
  },
  {
    text: "Profile Picture",
    image: imageFile,
    onClick: (): void => {
      window.open(profile, "_blank");
      return;
    },
  },
];
export const languageIcons = [
  {
    text: "Javascript",
    image: bookmarkIcon,
    onClick: (): void => {
      window.open(
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        "_blank"
      );
      return;
    },
  },
  {
    text: "React",
    image: bookmarkIcon,
    onClick: (): void => {
      window.open("https://reactjs.org/docs/getting-started.html", "_blank");
      return;
    },
  },
  {
    text: "Angular",
    image: bookmarkIcon,
    onClick: (): void => {
      window.open("https://docs.angularjs.org/api", "_blank");
      return;
    },
  },
  {
    text: "Java",
    image: bookmarkIcon,
    onClick: (): void => {
      window.open("https://docs.oracle.com/en/java/", "_blank");
      return;
    },
  },
  {
    text: "C",
    image: bookmarkIcon,
    onClick: (): void => {
      window.open("https://devdocs.io/c/", "_blank");
      return;
    },
  },
  {
    text: "Python",
    image: bookmarkIcon,
    onClick: (): void => {
      window.open("https://docs.python.org/3/", "_blank");
      return;
    },
  },
  {
    text: "SQL",
    image: bookmarkIcon,
    onClick: (): void => {
      window.open(
        "https://docs.microsoft.com/en-us/sql/?view=sql-server-ver15",
        "_blank"
      );
      return;
    },
  },
];
export const projectIcons = [
  {
    text: "Portfolio Website",
    image: textDocument,
    onClick: (): void => {
      window.open("thomashanna.me", "_blank");
      return;
    },
  },
  {
    text: "Ecommerce Store",
    image: textDocument,
    onClick: (): void => {
      window.open("https://github.com/thanna96/SewHoneyWebsite", "_blank");
      return;
    },
  },
  {
    text: "GE Cloud Managment",
    image: textDocument,
    onClick: (): void => {
      window.open("https://github.com/thanna96/where-can-you-stream", "_blank");
      return;
    },
  },
  {
    text: "Termgrid",
    image: textDocument,
    onClick: (): void => {
      window.open("https://app.termgrid.com/", "_blank");
      return;
    },
  },
];
export const bookmarkIcons = [
  {
    text: "Twitter",
    image: bookmarkIcon,
    onClick: (): void => {
      window.open("https://twitter.com/ThomasHanna96", "_blank");
      return;
    },
  },
  {
    text: "LinkedIn",
    image: bookmarkIcon,
    onClick: (): void => {
      window.open("https://www.linkedin.com/in/thomashanna96/", "_blank");
      return;
    },
  },
  {
    text: "Github",
    image: bookmarkIcon,
    onClick: (): void => {
      window.open("https://github.com/thanna96", "_blank");
      return;
    },
  },
];
