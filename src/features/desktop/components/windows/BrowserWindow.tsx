"use client";

import type { StaticImageData } from "next/image";
import { WindowShell } from "./WindowShell";

type InformationWindowProps = {
    icon: StaticImageData;
    visible: boolean;
    onClose: () => void;
};

export function BrowserWindow({ icon, visible, onClose }: InformationWindowProps) {
    if (!visible) {
        return null;
    }

    return (
        <WindowShell
            title="Internet Explorer"
            icon={icon}
            onClose={onClose}
            className="max-w-xl"
            bodyClassName="h-[375px] overflow-y-auto"
            footerContent={
                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="h-8 w-20 border border-black bg-[#C0C0C0] text-xs font-black"
                    >
                        OK
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="h-8 w-20 border border-black bg-[#C0C0C0] text-xs font-black"
                    >
                        Cancel
                    </button>
                </div>
            }
        >
            <div className="space-y-2 text-left">

            </div>
        </WindowShell>
    );
}