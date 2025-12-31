import "./index.scss";
import { links } from "../../../../src/data/links";
import { useState, useEffect, useRef, type RefObject, type Dispatch, type SetStateAction } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { NavItem } from "@solosseum/navitem";

type Props = {
  open?: boolean;
  setOn?: Dispatch<SetStateAction<boolean>>;
  buttonRef?: RefObject<HTMLButtonElement | null>;
};

export const NavList = ({ open, setOn, buttonRef }: Props) => {
  const [activeSection, setActiveSection] = useState("start-section");

  const listRef = useRef<HTMLUListElement>(null);

  const handleClickOutside = (event: Event) => {
    if (buttonRef?.current?.contains(event.target as Node)) return;

    if (setOn) setOn(false);
  };

  useOnClickOutside(listRef as RefObject<HTMLElement>, handleClickOutside);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    const sections = document.querySelectorAll(".scroll-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ul
      ref={listRef}
      className={`flex flex__align-center flex__gap-1  ${open === true && "flex__column flex__align-start navigation__list"}`}
    >
      {links.map((link) => {
        return <NavItem link={link} open={open} activeSection={activeSection} />;
      })}
    </ul>
  );
};
