import { RetroWindow, WindowMenu } from "./RetroWindow";

type ExplorerWindowProps = {
  icon: string;
  visible: boolean;
  close: () => void;
};

const SPACE_JAM_URL = "https://www.spacejam.com/1996/";

export function ExplorerWindow({ visible, icon, close }: ExplorerWindowProps) {
  if (!visible) return null;

  return (
    <RetroWindow
      visible={visible}
      close={close}
      title="Internet Explorer"
      icon={icon}
      toolbar={
        <>
          <WindowMenu items={["File", "History", "View", "Bookmarks"]} />
          <div className="flex min-h-6 w-full border text-left">
            <span className="border-r-2 px-2 font-black">Address:</span>
            <div className="min-w-0 flex-1 break-all bg-white shadow-inner">
              {SPACE_JAM_URL}
            </div>
            <a
              className="border-l-2 px-2 font-black text-black"
              href={SPACE_JAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Space Jam in a new tab"
            >
              GO
            </a>
          </div>
        </>
      }
    >
      <div className="flex h-full flex-col items-center justify-center gap-4 p-4 text-center text-black">
        <h1 className="text-3xl font-black">Space Jam (1996)</h1>
        <p>Explore the original movie website.</p>
        <a
          href={SPACE_JAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-black bg-[#C0C0C0] px-4 py-2 font-black text-black! shadow"
        >
          Open Space Jam website
        </a>
        <p className="text-sm">Opens in a new browser tab.</p>
      </div>
    </RetroWindow>
  );
}

export default ExplorerWindow;
