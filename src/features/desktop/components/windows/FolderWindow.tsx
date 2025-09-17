"use client";

import Image from "next/image";
import type { FolderIconDescriptor } from "@/features/desktop/types";
import { DesktopIconGroup } from "../DesktopIconGroup";
import { WindowShell } from "./WindowShell";
import { desktopAssets } from "@/features/desktop/utils/iconData";

type FolderWindowProps = {
  title: string;
  icons: FolderIconDescriptor[];
  visible: boolean;
  onClose: () => void;
};

export function FolderWindow({ title, icons, visible, onClose }: FolderWindowProps) {
  if (!visible) {
    return null;
  }

  const totalSize = (icons.length * 6.9).toFixed(2);

  return (
    <WindowShell
      title={title}
      icon={desktopAssets.folderIcon}
      onClose={onClose}
      className="max-w-3xl"
      bodyClassName="h-[275px] overflow-y-auto"
      addressContent={
        <>
          <span className="border-r border-black/40 pr-2">Address:</span>
          <div className="flex w-full items-center gap-2 border border-black/40 bg-white px-2 py-1 shadow-inner">
            <Image
              src={desktopAssets.removableDriveIcon}
              alt="drive"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span>C: \ {title} \</span>
          </div>
        </>
      }
      footerContent={
        <div className="flex items-center justify-between">
          <span>{icons.length} Objects</span>
          <span>{totalSize} MB</span>
          <span className="flex items-center gap-2">
            <Image
              src={desktopAssets.folderIcon}
              alt="folder"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span>{title}</span>
          </span>
        </div>
      }
    >
      <DesktopIconGroup icons={icons} isFolder />
    </WindowShell>
  );
}
