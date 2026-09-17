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
      {visible && (
        <iframe
          src={SPACE_JAM_URL}
          title="Space Jam (1996) website"
          className="h-full min-h-0 w-full border-0"
          allow="fullscreen"
          loading="lazy"
        />
      )}
    </RetroWindow>
  );
}

export default ExplorerWindow;
