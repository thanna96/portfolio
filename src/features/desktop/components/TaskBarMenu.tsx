"use client";

import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { desktopAssets } from "@/features/desktop/utils/iconData";

type StartMenuProps = {
    onClose: () => void;
};

type StartMenuItem = {
    title: string;
    icon: StaticImageData;
    href: string;
    external?: boolean;
    withDivider?: boolean;
};

const menuItems: StartMenuItem[] = [
    {
        title: "Contact",
        icon: desktopAssets.textDocument,
        href: "mailto:thanna96@gmail.com",
    },
    {
        title: "Resume",
        icon: desktopAssets.folderIcon,
        href: "/Thomas_Hanna_Resume.pdf",
    },
    {
        title: "LinkedIn",
        icon: desktopAssets.linkedinIcon,
        href: "https://www.linkedin.com/in/thomashanna96/",
        external: true,
        withDivider: true,
    },
    {
        title: "Twitter",
        icon: desktopAssets.twitterIcon,
        href: "https://twitter.com/ThomasHanna96",
        external: true,
    },
    {
        title: "Shut Down",
        icon: desktopAssets.computerIcon,
        href: "/",
        withDivider: true,
    },
];

export function StartMenu({ onClose }: StartMenuProps) {
    return (
        <div className="absolute inset-0 z-30" onClick={onClose}>
            <div
                className="absolute left-0 w-11/12 max-w-sm border-4 border-[#a4a4a4] bg-[#C0C0C0] p-1 shadow-2xl sm:w-2/3 md:w-1/3 lg:w-1/4"
                onClick={(event) => event.stopPropagation()}
                style={{ minHeight: "300px", bottom: "40px" }}
            >
                <div className="flex h-full flex-col divide-y divide-black/30">
                    {menuItems.map((item) => (
                        <MenuItem key={item.title} item={item} onClick={onClose} />
                    ))}
                </div>
            </div>
        </div>
    );
}

type MenuItemProps = {
    item: StartMenuItem;
    onClick: () => void;
};

function MenuItem({ item, onClick }: MenuItemProps) {
    const content = (
        <div className="flex items-center gap-2 px-2 py-3 text-left text-sm font-semibold hover:bg-blue-600 hover:text-white">
            <Image src={item.icon} alt={item.title} width={32} height={32} />
            <span>{item.title}</span>
        </div>
    );

    if (
        item.external ||
        item.href.startsWith("http") ||
        item.href.startsWith("mailto")
    ) {
        return (
            <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                onClick={onClick}
                className={item.withDivider ? "border-t border-black/30" : undefined}
            >
                {content}
            </a>
        );
    }

    return (
        <Link
            href={item.href}
            onClick={onClick}
            className={item.withDivider ? "border-t border-black/30" : undefined}
        >
            {content}
        </Link>
    );
}

export { StartMenu as TaskBarMenu };