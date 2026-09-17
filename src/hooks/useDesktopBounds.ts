import { useLayoutEffect, useRef, useState } from "react";

export function useDesktopBounds() {
  const surfaceRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useLayoutEffect(() => {
    const element = surfaceRef.current;
    if (!element) return;
    const measure = () =>
      setBounds({
        width: element.clientWidth || window.innerWidth,
        height: element.clientHeight,
      });
    measure();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return { surfaceRef, bounds };
}
