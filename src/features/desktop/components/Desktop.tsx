"use client";

import { useState } from "react";
import { DesktopIconGroup } from "./DesktopIconGroup";
import { TaskBar } from "./TaskBar";
import { InformationWindow } from "./windows/InformationWindow";
import { FolderWindow } from "./windows/FolderWindow";
import {
    bookmarkIcons,
    desktopAssets,
    languageIcons,
    myDocumentsIcons,
    projectIcons,
} from "@/features/desktop/utils/iconData";
import type { DesktopWindowId } from "@/features/desktop/types";

export function Desktop() {
    const [openedWindows, setOpenedWindows] = useState<DesktopWindowId[]>([]);

    const desktopIcons = [
        {
            id: "my_information" as DesktopWindowId,
            text: "My Information",
            image: desktopAssets.computerIcon,
            onClick: () => openWindow("my_information"),
        },
        {
            id: "internet" as const,
            text: "Internet Explorer",
            image: desktopAssets.internetIcon,
            onClick: () => {
                window.open("https://www.spacejam.com/1996/", "_blank");
            },
        },
        {
            id: "my_documents" as DesktopWindowId,
            text: "My Documents",
            image: desktopAssets.folderIcon,
            onClick: () => openWindow("my_documents"),
        },
        {
            id: "my_languages" as DesktopWindowId,
            text: "Favorite Languages",
            image: desktopAssets.folderIcon,
            onClick: () => openWindow("my_languages"),
        },
        {
            id: "my_projects" as DesktopWindowId,
            text: "Projects",
            image: desktopAssets.folderIcon,
            onClick: () => openWindow("my_projects"),
        },
        {
            id: "my_bookmarks" as DesktopWindowId,
            text: "Bookmarks",
            image: desktopAssets.folderIcon,
            onClick: () => openWindow("my_bookmarks"),
        },
    ];

    function openWindow(id: DesktopWindowId) {
        setOpenedWindows((previous) =>
            previous.includes(id) ? previous : [...previous, id]
        );
    }

    function closeWindow(id: DesktopWindowId) {
        setOpenedWindows((previous) => previous.filter((windowId) => windowId !== id));
    }

    return (
        <>
            <DesktopIconGroup icons={desktopIcons} isFolder={false} />
            <TaskBar />
            <InformationWindow
                icon={desktopIcons[0].image}
                visible={openedWindows.includes("my_information")}
                onClose={() => closeWindow("my_information")}
            />
            <FolderWindow
                title="My Documents"
                icons={myDocumentsIcons}
                visible={openedWindows.includes("my_documents")}
                onClose={() => closeWindow("my_documents")}
            />
            <FolderWindow
                title="Favorite Languages"
                icons={languageIcons}
                visible={openedWindows.includes("my_languages")}
                onClose={() => closeWindow("my_languages")}
            />
            <FolderWindow
                title="My Projects"
                icons={projectIcons}
                visible={openedWindows.includes("my_projects")}
                onClose={() => closeWindow("my_projects")}
            />
            <FolderWindow
                title="Bookmarks"
                icons={bookmarkIcons}
                visible={openedWindows.includes("my_bookmarks")}
                onClose={() => closeWindow("my_bookmarks")}
            />
        </>
    );
}