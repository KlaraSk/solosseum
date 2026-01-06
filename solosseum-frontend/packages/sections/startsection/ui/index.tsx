import { ScrollSection } from "@solosseum/scrollsection";
import "./index.scss";
import { Button } from "@solosseum/button";
import { scrollToSection } from "../../../../src/utils";

type Props = {};

export const StartSection = ({}: Props) => {
  const handleClick = () => {
    scrollToSection("contact-section");
  };

  return (
    <>
      <ScrollSection
        id="start-section"
        extraClasses="flex  flex__align-center flex__justify-center flex__gap-3 start-section bg-color__subtle wrapper"
      >
        <h1 className="sr-only">Solosseum AB Magnus Henrichson</h1>
        <div className="flex flex__column  flex__justify-center flex__gap-1-5 start-section__top-div">
          <h3 className="heading-4 text-color-dark">Projektledare & konsult</h3>
          <h2 className="heading-2  text-color-primary">Strukturerad projektledning för komplexa affärsutmaningar</h2>
          <p className="text-body text-color-dark">
            Jag hjälper organisationer att genomföra framgångsrika projekt inom ERP-implementering, affärsutveckling och digital
            transformation.
          </p>
          <Button style="primary" extraClasses="start-section__btn" onClick={handleClick} aria="Till kontaktformuläret">
            Kontakt
          </Button>
        </div>

        <div className="grid grid__center start-section__bottom-div">
          <img src="./public/magnus-henrichson.jpeg" alt="Magnus Henrichson Solosseum AB" className="start-section__img" />
        </div>
      </ScrollSection>
    </>
  );
};
