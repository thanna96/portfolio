"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";

type DesktopIconProps = {
    focused: string;
    setFocused: (value: string) => void;
    text: string;
    image: StaticImageData;
    onClick: () => void;
    isFolder: boolean;
};

export function DesktopIcon({
                                focused,
                                setFocused,
                                text,
                                image,
                                onClick,
                                isFolder,
                            }: DesktopIconProps) {
    return (
        <div
            onClick={() => {
                setFocused(text);
                onClick();
            }}
            className={`relative w-[80px] cursor-pointer border-transparent bg-transparent p-1 text-center ${
                focused === text ? "border border-dashed border-black" : ""
            }`}
        >
            <Image
                src={image}
                alt={text}
                width={50}
                height={50}
                className="mx-auto h-[50px] w-[50px] object-contain"
            />
            <p className={`mt-1 break-words text-sm ${!isFolder ? "text-white" : "text-black"}`}>
                {text}
            </p>
        </div>
    );
}