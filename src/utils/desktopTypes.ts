export type WindowId =
  | "profile_picture"
  | "my_information"
  | "internet"
  | "my_documents"
  | "my_languages"
  | "my_projects"
  | "my_bookmarks";

export type DesktopIconDefinition = {
  id: string;
  text: string;
  image: string;
} & ({ href: string; onClick?: never } | { onClick: () => void; href?: never });

export function openWindow(windows: WindowId[], id: WindowId): WindowId[] {
  return windows.includes(id) ? windows : [...windows, id];
}

export function closeWindow(windows: WindowId[], id: WindowId): WindowId[] {
  return windows.filter((window) => window !== id);
}
