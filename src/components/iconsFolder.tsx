import imageFile from "../files/icons/Windows 2000 Bitmap Image-4.png";
import bookmarkIcon from "../files/icons/Windows 2000 Internet Document-5.png";
import textDocument from "../files/icons/Windows 2000 Text Document-2.png";
import profile from "../files/images/profile_picture.jpg";

import type { DesktopIconDefinition } from "../utils/desktopTypes";

export const myDocsIcons: DesktopIconDefinition[] = [
  {
    id: "my-resume",
    text: "My Resume",
    image: textDocument,
    href: "/Thomas_Hanna_Resume.pdf",
  },
  {
    id: "profile-picture",
    text: "Profile Picture",
    image: imageFile,
    href: profile,
  },
];
export const languageIcons: DesktopIconDefinition[] = [
  {
    id: "javascript",
    text: "Javascript",
    image: bookmarkIcon,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "react",
    text: "React",
    image: bookmarkIcon,
    href: "https://react.dev/learn",
  },
  {
    id: "angular",
    text: "Angular",
    image: bookmarkIcon,
    href: "https://angular.dev/overview",
  },
  {
    id: "java",
    text: "Java",
    image: bookmarkIcon,
    href: "https://docs.oracle.com/en/java/",
  },
  {
    id: "c",
    text: "C",
    image: bookmarkIcon,
    href: "https://devdocs.io/c/",
  },
  {
    id: "python",
    text: "Python",
    image: bookmarkIcon,
    href: "https://docs.python.org/3/",
  },
  {
    id: "sql",
    text: "SQL",
    image: bookmarkIcon,
    href: "https://learn.microsoft.com/en-us/sql/",
  },
];
export const projectIcons: DesktopIconDefinition[] = [
  {
    id: "portfolio-website",
    text: "Portfolio Website",
    image: textDocument,
    href: "/",
  },
  {
    id: "calculator-web-app",
    text: "Calculator Web App",
    image: textDocument,
    href: "https://github.com/thanna96/calculator-web-app",
  },
  {
    id: "ai-risk-intelligence-platform",
    text: "AI Risk Intelligence Platform",
    image: textDocument,
    href: "https://github.com/thanna96/lenses-hackathon",
  },
  {
    id: "ecommerce-store",
    text: "Ecommerce Store",
    image: textDocument,
    href: "https://test-store-thomas-hanna.netlify.app/",
  },
  {
    id: "crypto-chat",
    text: "Crypto Chat",
    image: textDocument,
    href: "https://github.com/thanna96/Crypto-Chat",
  },
  {
    id: "termgrid",
    text: "Termgrid",
    image: textDocument,
    href: "https://app.termgrid.com/",
  },
  {
    id: "az-auto",
    text: "AZ-Auto",
    image: textDocument,
    href: "https://az-auto.netlify.app/",
  },
];
export const bookmarkIcons: DesktopIconDefinition[] = [
  {
    id: "twitter",
    text: "Twitter",
    image: bookmarkIcon,
    href: "https://twitter.com/ThomasHanna96",
  },
  {
    id: "linkedin",
    text: "LinkedIn",
    image: bookmarkIcon,
    href: "https://www.linkedin.com/in/thomashanna96/",
  },
  {
    id: "github",
    text: "Github",
    image: bookmarkIcon,
    href: "https://github.com/thanna96",
  },
];
