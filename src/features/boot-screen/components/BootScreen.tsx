"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import windowsLogo from "@/assets/icons/windows-logo.jpeg";

const PROGRESS_STEPS = 10;

export function BootScreen() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setProgress((current) => {
                if (current >= PROGRESS_STEPS) {
                    window.clearInterval(interval);
                    return current;
                }
                return current + 1;
            });
        }, 500);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <div className="relative h-full text-black">
            <div className="centered-container h-full">
                <div className="m-auto h-3/4 w-3/4 border-2 border-black bg-white text-center shadow-lg md:h-4/6">
                    <div className="relative h-full bg-white">
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90">
                            <h1 className="px-4 text-xl font-black md:self-start md:text-left">
                                Thomas Hanna
                                <br />
                                Software Developer
                                <br />
                                Click to open files!
                            </h1>
                            <div className="relative my-4 h-40 w-56 md:h-48 md:w-72">
                                <Image
                                    src={windowsLogo}
                                    alt="Windows logo"
                                    className="object-contain"
                                    fill
                                    sizes="(max-width: 768px) 224px, 288px"
                                />
                            </div>
                            <h2 className="absolute bottom-28 w-full px-4 text-xl font-black md:bottom-32 md:text-right">
                                Welcome to my website!
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute bottom-0 w-full border-t-8 border-blue-800"
                style={{ background: "#C0C0C0", height: "80px" }}
            >
                <div className="relative mx-auto mt-2 flex w-full max-w-md flex-col items-center text-center">
                    <span>Starting Up...</span>
                    <div className="mt-2 inline-flex items-center gap-2">
                        <span className="text-sm">Loading</span>
                        <div className="inline-flex h-6 w-52 overflow-hidden border border-gray-400 bg-white shadow-inner">
                            <div
                                className="flex h-full items-center"
                                style={{ width: `${(progress / PROGRESS_STEPS) * 100}%` }}
                            >
                                {[...Array(progress)].map((_, index) => (
                                    <div
                                        key={index}
                                        className="h-full w-5 bg-blue-400"
                                        style={{ marginRight: index === progress - 1 ? 0 : 2 }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="mt-1 text-xs">Copyright &copy; 1996-2024 Thomas Hanna</p>
                </div>
            </div>
        </div>
    );
}