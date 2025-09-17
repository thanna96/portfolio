"use client";

import bookmarkIcon from "@/assets/icons/Windows 2000 Internet Document-5.png";
import folderIcon from "@/assets/icons/Windows 2000 Closed Folder-6.png";
import imageFile from "@/assets/icons/Windows 2000 Bitmap Image-4.png";
import removableDriveIcon from "@/assets/icons/Windows 2000 Removable Drive-2.png";
import textDocument from "@/assets/icons/Windows 2000 Text Document-2.png";
import computerIcon from "@/assets/icons/Windows 2000 My Computer-3.png";
import internetIcon from "@/assets/icons/Windows 2000 The Internet-2.png";
import startIcon from "@/assets/icons/start_main.0.jpg";
import soundIcon from "@/assets/icons/sound_icon.png";
import twitterIcon from "@/assets/icons/twitter.png";
import linkedinIcon from "@/assets/icons/linkedin.png";
import windowsLogo from "@/assets/icons/windows-logo.jpeg";
import profilePicture from "@/assets/images/profile_picture.jpg";
import type { FolderIconDescriptor } from "../types";

export const myDocumentsIcons: FolderIconDescriptor[] = [
  {
    text: "My Resume",
    image: textDocument,
    onClick: () => {
      window.open("/Thomas_Hanna_Resume.pdf", "_blank");
    },
  },
  {
    text: "Profile Picture",
    image: imageFile,
    onClick: () => {
      window.open(profilePicture.src, "_blank");
    },
  },
];

export const languageIcons: FolderIconDescriptor[] = [
  {
    text: "Javascript",
    image: bookmarkIcon,
    onClick: () => {
      window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank");
    },
  },
  {
    text: "React",
    image: bookmarkIcon,
    onClick: () => {
      window.open("https://react.dev/learn", "_blank");
    },
  },
  {
    text: "Angular",
    image: bookmarkIcon,
    onClick: () => {
      window.open("https://angular.dev/overview", "_blank");
    },
  },
  {
    text: "Java",
    image: bookmarkIcon,
    onClick: () => {
      window.open("https://docs.oracle.com/en/java/", "_blank");
    },
  },
  {
    text: "C",
    image: bookmarkIcon,
    onClick: () => {
      window.open("https://devdocs.io/c/", "_blank");
    },
  },
  {
    text: "Python",
    image: bookmarkIcon,
    onClick: () => {
      window.open("https://docs.python.org/3/", "_blank");
    },
  },
  {
    text: "SQL",
    image: bookmarkIcon,
    onClick: () => {
      window.open("https://learn.microsoft.com/en-us/sql/", "_blank");
    },
  },
];

export const projectIcons: FolderIconDescriptor[] = [
  {
    text: "Portfolio Website",
    image: textDocument,
    onClick: () => {
      window.open("/", "_blank");
    },
  },
  {
    text: "Ecommerce Store",
    image: textDocument,
    onClick: () => {
      window.open("https://test-store-thomas-hanna.netlify.app/", "_blank");
    },
  },
  {
    text: "Crypto Chat",
    image: textDocument,
    onClick: () => {
      window.open("https://github.com/thanna96/Crypto-Chat", "_blank");
    },
  },
  {
    text: "Termgrid",
    image: textDocument,
    onClick: () => {
      window.open("https://app.termgrid.com/", "_blank");
    },
  },
  {
    text: "TaskList",
    image: textDocument,
    onClick: () => {
      window.open("https://gotesttasklist.up.railway.app/", "_blank");
    },
  },
];

export const bookmarkIcons: FolderIconDescriptor[] = [
  {
    text: "Twitter",
    image: bookmarkIcon,
    onClick: () => {
      window.open("https://twitter.com/ThomasHanna96", "_blank");
    },
  },
  {
    text: "LinkedIn",
    image: bookmarkIcon,
    onClick: () => {
      window.open("https://www.linkedin.com/in/thomashanna96/", "_blank");
    },
  },
  {
    text: "Github",
    image: bookmarkIcon,
    onClick: () => {
      window.open("https://github.com/thanna96", "_blank");
    },
  },
];

export const desktopAssets = {
  folderIcon,
  textDocument,
  bookmarkIcon,
  internetIcon,
  computerIcon,
  removableDriveIcon,
  startIcon,
  soundIcon,
  twitterIcon,
  linkedinIcon,
  windowsLogo,
};
