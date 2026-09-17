import { createContext, useContext } from "react";

export type WindowControls = {
  bounds: { width: number; height: number };
  active: boolean;
  minimized: boolean;
  maximized: boolean;
  zIndex: number;
  focus: () => void;
  minimize: () => void;
  maximize: () => void;
};
export const WindowContext = createContext<WindowControls | null>(null);
export const useWindowControls = () => useContext(WindowContext);
