"use client";

import { useState } from "react";
import { DesktopIcon } from "./DesktopIcon";
import type { FolderIconDescriptor } from "@/features/desktop/types";

type DesktopIconGroupProps = {
    icons: (FolderIconDescriptor & { id?: string })[];
    isFolder: boolean;
};

export function DesktopIconGroup({ icons, isFolder }: DesktopIconGroupProps) {
    const [focused, setFocused] = useState<string>("");

    return (
        <div className="m-4 inline-grid gap-2" style={{ gridAutoFlow: "column" }}>
            <div className={`${isFolder ? "grid-rows-2" : "grid-rows-4"} grid gap-2`}>
                {icons.map((icon) => (
                    <DesktopIcon
                        key={icon.id ?? icon.text}
                        focused={focused}
                        setFocused={setFocused}
                        image={icon.image}
                        text={icon.text}
                        onClick={icon.onClick}
                        isFolder={isFolder}
                    />
                ))}
            </div>
        </div>
    );
}