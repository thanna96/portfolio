import type { StaticImageData } from "next/image";

export type DesktopWindowId =
    | "my_information"
    | "my_documents"
    | "my_languages"
    | "my_projects"
    | "my_bookmarks"
    | "internet";

export type DesktopIconDescriptor = {
    id: DesktopWindowId | string;
    text: string;
    image: StaticImageData;
    onClick: () => void;
};

export type FolderIconDescriptor = {
    text: string;
    image: StaticImageData;
    onClick: () => void;
};