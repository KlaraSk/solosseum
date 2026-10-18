import "./index.scss";
import { links } from "../../../../src/data/links";
import { useRef, type RefObject, type Dispatch, type SetStateAction } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { NavItem } from "@solosseum/navitem";

type Props = {
  open?: boolean;
  setOn?: Dispatch<SetStateAction<boolean>>;
  buttonRef?: RefObject<HTMLButtonElement | null>;
  activeSection: string;
  onNavigate: (id: string) => void;
};

export const NavList = ({ open, setOn, buttonRef, activeSection, onNavigate }: Props) => {
  const listRef = useRef<HTMLUListElement>(null);

  const handleClickOutside = (event: Event) => {
    if (buttonRef?.current?.contains(event.target as Node)) return;

    if (setOn) setOn(false);
  };

  useOnClickOutside(listRef as RefObject<HTMLElement>, handleClickOutside);

  return (
    <ul
      ref={listRef}
      className={`flex flex__align-center flex__gap-1 ${open === true ? "flex__column flex__align-start navigation__list" : ""}`}
    >
      {links.map((link) => (
        <NavItem key={link.id} link={link} open={open} activeSection={activeSection} onNavigate={onNavigate} />
      ))}
    </ul>
  );
};
