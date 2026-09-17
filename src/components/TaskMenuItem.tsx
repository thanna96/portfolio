import { classNames } from "../utils/classNames";

export function TaskMenuItem({
  title,
  icon,
  borderTop,
  link,
  onNavigate,
  onActivate,
}: TaskMenuItemProps) {
  const className = classNames(
    "classic-start-item text-black! hover:text-white! focus-visible:text-white!",
    borderTop && "start-item-separator",
  );
  const content = (
    <>
      <img className="start-item-icon" src={icon} alt="" />
      <span className="start-item-label">{title}</span>
    </>
  );
  const activateItem = () => {
    onActivate?.();
    onNavigate?.();
  };
  if (onActivate) {
    return (
      <button type="button" className={className} onClick={activateItem}>
        {content}
      </button>
    );
  }
  const opensNewTab = !link.startsWith("mailto:") && link !== "/";
  return (
    <a
      href={link}
      target={opensNewTab ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={className}
      onClick={activateItem}
    >
      {content}
    </a>
  );
}
type TaskMenuItemProps = {
  title: string;
  icon: string;
  borderTop: boolean;
  link: string;
  onNavigate?: () => void;
  onActivate?: () => void;
};
