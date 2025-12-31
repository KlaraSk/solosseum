import "./index.scss";
import { Button } from "@solosseum/button";

import clsx from "clsx";

type Props = {
  activeSection: string;
  link: { id: string; text: string };
  open?: boolean;
};

export const NavItem = ({ activeSection, link, open }: Props) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const btnClasses = clsx("btn-transparent", {
    "btn-active": activeSection === link.id,
    "navigation__burger-btn": open === true,
  });
  return (
    <li key={link.id} className="navigation__list-item">
      <Button aria={`Gå till ${link.text}`} text={link.text} onClick={() => scrollToSection(link.id)} extraClasses={btnClasses} />
    </li>
  );
};
