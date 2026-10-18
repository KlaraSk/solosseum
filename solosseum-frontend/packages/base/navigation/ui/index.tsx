import "./index.scss";
import { Button } from "@solosseum/button";
import { useViewport } from "react-viewport-hooks";
import { NavList } from "@solosseum/navlist";
import { RxHamburgerMenu } from "react-icons/rx";
import useToggle from "../../../../src/hooks/useToggle";
import { useRef } from "react";
import { useActiveSection } from "../../../../src/hooks/useActiveSection";

export const Navigation = () => {
  const { vw } = useViewport();
  const [open, toggleOpen, setOn] = useToggle({
    initialValue: false,
    onToggle() {},
  });
  const [activeSection, navigateTo] = useActiveSection();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleNavigate = (id: string) => {
    navigateTo(id);
    setOn(false); // Close menu
  };

  return (
    <nav className="flex navigation">
      {vw >= 992 ? (
        <NavList activeSection={activeSection} onNavigate={handleNavigate} />
      ) : (
        <>
          <Button
            ref={buttonRef}
            extraClasses="flex flex__align-center flex__gap-0-25 btn-light"
            onClick={toggleOpen}
            aria="Öppna/stäng navigationsmenyn"
          >
            <RxHamburgerMenu />
            <span>Meny</span>
          </Button>
          {open && <NavList open={open} setOn={setOn} buttonRef={buttonRef} activeSection={activeSection} onNavigate={handleNavigate} />}
        </>
      )}
    </nav>
  );
};
