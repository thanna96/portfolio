import { useEffect, useState, type ReactNode } from "react";

import { WindowBootUp } from "../../pages/WindowBootUp";

export const BOOT_DURATION_MS = 5000;
const BOOT_STEPS = 10;

export function MainLayout({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);
  const loading = progress < BOOT_STEPS;
  useEffect(() => {
    if (!loading) return;
    const timer = window.setInterval(() => {
      setProgress((value) => Math.min(value + 1, BOOT_STEPS));
    }, BOOT_DURATION_MS / BOOT_STEPS);
    return () => window.clearInterval(timer);
  }, [loading]);
  return (
    <div className="min-h-dvh bg-black flex items-center justify-center">
      <main className="relative h-[100dvh] w-full overflow-auto bg-[#3A6EA5] lg:h-[80dvh] lg:w-3/4">
        {loading ? <WindowBootUp progress={progress * 10} /> : children}
      </main>
    </div>
  );
}
