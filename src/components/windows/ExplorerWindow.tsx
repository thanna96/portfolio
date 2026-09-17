import { RetroWindow, WindowMenu } from "./RetroWindow";

type ExplorerWindowProps = {
  icon: string;
  visible: boolean;
  close: () => void;
};

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
          <WindowMenu items={["File", "History", "View", "Favorites"]} />
          <div className="flex min-h-6 w-full border text-left">
            <span className="border-r-2 px-2 font-black">Address:</span>
            <div className="min-w-0 flex-1 break-all bg-white shadow-inner">
              http://www.google.com/
            </div>
            <button
              type="button"
              disabled
              className="border-l-2 px-2 font-black text-black"
            >
              GO
            </button>
          </div>
        </>
      }
    >
      <section
        aria-label="Classic Google homepage"
        className="flex min-h-full flex-col items-center justify-center gap-3 p-3 text-center text-black"
        style={{ fontFamily: '"Times New Roman", serif' }}
      >
        <h1
          aria-label="Google"
          className="m-0 text-6xl leading-none font-bold tracking-[-4px] sm:text-7xl"
        >
          <span aria-hidden="true">
            <span className="text-[#1646af]">G</span>
            <span className="text-[#d5261c]">o</span>
            <span className="text-[#e4b600]">o</span>
            <span className="text-[#1646af]">g</span>
            <span className="text-[#168b36]">l</span>
            <span className="text-[#d5261c]">e</span>
            <span className="ml-1 align-top text-sm tracking-normal text-[#1646af]">
              ™
            </span>
          </span>
        </h1>
        <div className="w-full bg-[#eeeeee] px-2 py-3">
          <label htmlFor="google-search" className="block">
            Search the web using Google!
          </label>
          <input
            id="google-search"
            type="text"
            autoComplete="off"
            className="my-1 h-6 w-full max-w-xs border-2 border-[#888] bg-white px-1 text-base text-black"
          />
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              disabled
              className="border-2 border-[#999] bg-[#ddd] px-2 py-0.5 text-sm text-black"
            >
              Google Search
            </button>
            <button
              type="button"
              disabled
              className="border-2 border-[#999] bg-[#ddd] px-2 py-0.5 text-sm text-black"
            >
              I&apos;m Feeling Lucky
            </button>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-0.5 text-sm sm:grid-cols-3">
          <div className="bg-[#7ee5da] p-2">
            Special Searches
            <br />
            <span className="text-[#0000aa] underline">Stanford Search</span>
            <br />
            <span className="text-[#0000aa] underline">Linux Search</span>
          </div>
          <div className="bg-[#70ccc2] p-2">
            <span className="text-[#0000aa] underline">Help!</span>
            <br />
            <span className="text-[#0000aa] underline">About Google!</span>
            <br />
            <span className="text-[#0000aa] underline">Company Info</span>
          </div>
          <div className="bg-[#62b3aa] p-2">
            Get Google! updates monthly:
            <br />
            <input
              aria-label="Email for Google updates"
              placeholder="your e-mail"
              disabled
              className="my-1 w-full border border-[#888] bg-white px-1 text-black"
            />
            <br />
            <button
              type="button"
              disabled
              className="border border-[#888] bg-[#ddd] px-2 text-black"
            >
              Subscribe
            </button>
          </div>
        </div>
        <p className="text-xs">Copyright © 2000 Google Inc.</p>
      </section>
    </RetroWindow>
  );
}

export default ExplorerWindow;
