import { useEffect, useState } from "react";

const formatTime = () =>
  new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

export function useTaskbarClock() {
  const [time, setTime] = useState(formatTime);

  useEffect(() => {
    let interval: number | undefined;
    const timeout = window.setTimeout(
      () => {
        setTime(formatTime());
        interval = window.setInterval(() => setTime(formatTime()), 60000);
      },
      60000 - (Date.now() % 60000),
    );
    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);

  return time;
}
