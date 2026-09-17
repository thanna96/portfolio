import { Suspense, useReducer } from "react";

import { DesktopIconGroup } from "../components/DesktopIconGroup";
import { TaskBar } from "../components/TaskBar";
import { DesktopWindow } from "../components/windows/DesktopWindow";
import { WindowContext } from "../components/windows/WindowContext";
import { useDesktopBounds } from "../hooks/useDesktopBounds";
import { desktopShortcuts, windowMetadata } from "../utils/desktopConfig";
import { initialWindows, windowReducer } from "../utils/windowManager";

import type { DesktopIconDefinition, WindowId } from "../utils/desktopTypes";

export function Desktop() {
  const { surfaceRef, bounds } = useDesktopBounds();
  const [windows, dispatch] = useReducer(windowReducer, initialWindows);
  const openWindow = (id: WindowId) => dispatch({ type: "open", id });
  const closeWindow = (id: WindowId) => dispatch({ type: "close", id });
  const desktopIcons: DesktopIconDefinition[] = desktopShortcuts.map(
    ({ id, text }) => ({
      id,
      text,
      image: windowMetadata[id].icon,
      onClick: () => openWindow(id),
    }),
  );
  const taskbarWindows = windows.opened.map((id) => ({
    id,
    ...windowMetadata[id],
    minimized: windows.minimized.includes(id),
  }));

  return (
    <div ref={surfaceRef} className="desktop-surface">
      <DesktopIconGroup icons={desktopIcons} isFolder={false} />
      <TaskBar
        windows={taskbarWindows}
        activeWindow={windows.active}
        onWindowClick={(id) => dispatch({ type: "taskbar", id })}
        onOpenResume={() => openWindow("resume")}
        onOpenContact={() => openWindow("contact")}
      />
      {windows.opened.map((id) => (
        <WindowContext.Provider
          key={id}
          value={{
            bounds,
            active: windows.active === id,
            minimized: windows.minimized.includes(id),
            maximized: windows.maximized.includes(id),
            zIndex: 10 + windows.order.indexOf(id),
            focus: () => dispatch({ type: "focus", id }),
            minimize: () => dispatch({ type: "minimize", id }),
            maximize: () => dispatch({ type: "maximize", id }),
          }}
        >
          <Suspense fallback={null}>
            <DesktopWindow
              id={id}
              onClose={() => closeWindow(id)}
              onOpen={openWindow}
            />
          </Suspense>
        </WindowContext.Provider>
      ))}
    </div>
  );
}

export default Desktop;
