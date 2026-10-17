import "./index.scss";
import clsx from "clsx";
import { scrollToSection } from "../../../../src/utils";

type Props = {
  activeSection: string;
  link: { id: string; text: string };
  open?: boolean;
  onNavigate: (id: string) => void;
};

export const NavItem = ({ activeSection, link, open, onNavigate }: Props) => {
  const isActive = activeSection === link.id;

  const linkClasses = clsx("btn", "text-body", "btn-transparent", {
    "btn-active": isActive,
    "navigation__burger-btn": open === true,
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    e.preventDefault();
    scrollToSection(link.id);
    document.getElementById(link.id)?.focus({ preventScroll: true });
    onNavigate(link.id);
  };

  return (
    <li className="navigation__list-item">
      <a href={`#${link.id}`} className={linkClasses} aria-current={isActive ? "true" : undefined} onClick={handleClick}>
        {link.text}
      </a>
    </li>
  );
};
