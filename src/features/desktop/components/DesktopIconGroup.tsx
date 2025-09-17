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
        <div className="m-4">
            <div className={`${isFolder ? "grid-rows-2" : "grid-rows-4"} grid-flow-col gap-2 row-span-1`}
                 style={{ display: "inline-grid" }}>
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