"use client";

import { useEffect, useState } from "react";
import { BootScreen } from "@/features/boot-screen/components/BootScreen";
import { Desktop } from "@/features/desktop/components/Desktop";

export function HomeRoute() {
    const [isBooting, setIsBooting] = useState(true);

    useEffect(() => {
        const timer = window.setTimeout(() => setIsBooting(false), 5000);
        return () => window.clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-black">
            <div className="centered-container h-screen">
                <div
                    className="relative m-auto h-[90vh] w-full lg:h-3/4 lg:w-3/4"
                    style={{ background: "#3A6EA5" }}
                >
                    {isBooting ? <BootScreen /> : <Desktop />}
                </div>
            </div>
        </div>
    );
}

export default HomeRoute;