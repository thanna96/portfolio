import textDocument from "../files/icons/Windows 2000 Text Document-2.png";
import imageFile from "../files/icons/Windows 2000 Bitmap Image-4.png";
import profile from "../files/images/profile_picture.jpg";
export const myDocsIcons = [
  {
    text: "My Resume",
    image: textDocument,
    onClick: (): void => {
      window.open("../files/Thomas_Hanna_Resume.pdf", "_blank");
      return;
    },
  },
  {
    text: "Ok Cupid Picture",
    image: imageFile,
    onClick: (): void => {
      window.open(profile, "_blank");
      return;
    },
  },
];
