import { RetroWindow, WindowMenu } from "./RetroWindow";
import imageIcon from "../../files/icons/Windows 2000 Bitmap Image-4.png";
import profile from "../../files/images/profile_picture.jpg";

import type { WindowProps } from "./windowTypes";

const TOOL_SYMBOLS = ["✎", "▧", "A", "╱", "□", "○", "⌕", "▰"];
const PALETTE_COLORS = [
  "#000",
  "#808080",
  "#800000",
  "#808000",
  "#008000",
  "#008080",
  "#000080",
  "#800080",
  "#fff",
  "#c0c0c0",
  "#f00",
  "#ff0",
  "#0f0",
  "#0ff",
  "#00f",
  "#f0f",
];

export default function PaintWindow({ visible, close }: WindowProps) {
  return (
    <RetroWindow
      visible={visible}
      close={close}
      title="Profile Picture - Paint"
      icon={imageIcon}
      contentClassName="paint-workspace"
      toolbar={
        <WindowMenu
          items={["File", "Edit", "View", "Image", "Colors", "Help"]}
        />
      }
      footer={
        <div className="paint-status">
          <span>For Help, click Help Topics on the Help Menu.</span>
          <span>Profile Picture</span>
        </div>
      }
    >
      <div className="paint-editor">
        <aside className="paint-toolbox" aria-hidden="true">
          {TOOL_SYMBOLS.map((tool, index) => (
            <span
              className={index === 0 ? "paint-tool selected" : "paint-tool"}
              key={tool}
            >
              {tool}
            </span>
          ))}
        </aside>
        <div className="paint-canvas">
          <img src={profile} alt="Thomas Hanna" />
        </div>
      </div>
      <div className="paint-palette" aria-hidden="true">
        <span className="paint-current-color" />
        <div>
          {PALETTE_COLORS.map((color) => (
            <span key={color} style={{ background: color }} />
          ))}
        </div>
      </div>
    </RetroWindow>
  );
}
