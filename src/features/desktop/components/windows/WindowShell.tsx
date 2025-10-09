"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

const defaultMenu = ["File", "Edit", "View"];

type WindowShellProps = {
    title: string;
    icon: StaticImageData;
    onClose: () => void;
    children: ReactNode;
    className?: string;
    bodyClassName?: string;
    menuContent?: ReactNode;
    addressContent?: ReactNode;
    footerContent?: ReactNode;
};

export function WindowShell({
                                title,
                                icon,
                                onClose,
                                children,
                                className,
                                bodyClassName,
                                menuContent,
                                addressContent,
                                footerContent,
                            }: WindowShellProps) {
    return (
        <div
            className={`absolute left-1/2 top-1/2 z-20 w-[90%] max-w-3xl -translate-x-1/2 -translate-y-1/2 border-4 border-[#c0c0c0] bg-[#c0c0c0] shadow-2xl ${
                className ?? ""
            }`}
        >
            <div className="flex h-6 items-center gap-2 bg-blue-700 px-1 text-xs font-black text-white">
                <Image src={icon} alt="window icon" width={20} height={20} className="h-5 w-5" />
                <span className="flex-1">{title}</span>
                <button
                    type="button"
                    onClick={onClose}
                    className="h-5 w-5 border border-blue-700 bg-[#C0C0C0] text-xs font-black text-black"
                >
                    X
                </button>
            </div>
            <div className="h-6 text-left border">
                {menuContent ??
                    defaultMenu.map((item) => (
                        <span key={item} className="font-black border-r-2 px-2">
              {item}
            </span>
                    ))}
            </div>
            {addressContent ? (
                <div className="flex h-7 items-center gap-2 border border-t-0 border-black/40 bg-[#C0C0C0] px-2 text-xs font-black">
                    {addressContent}
                </div>
            ) : null}
            <div
                className={`relative m-4 border border-black bg-white p-2 shadow-inner ${
                    bodyClassName ?? ""
                }`}
            >
                {children}
            </div>
            {footerContent ? (
                <div className="border-t border-black/40 bg-[#C0C0C0] p-2 text-xs font-black">
                    {footerContent}
                </div>
            ) : null}
        </div>
    );
}