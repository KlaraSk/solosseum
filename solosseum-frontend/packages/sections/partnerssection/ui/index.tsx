import { ScrollSection } from "@solosseum/scrollsection";
import "./index.scss";

type Props = {};

export const PartnersSection = ({}: Props) => {
  return (
    <>
      <ScrollSection id="partners-section" extraClasses="grid grid__center">
        <div className="partners grid">
          <h2 className="heading-2 text-color-primary partners__heading">Samarbeten</h2>
          <img className="partners__logo partners__logo--solosseum" src="./public/solosseum-logo.svg" alt="Solosseum AB" />
          <div className="grid grid__center">
            <img className="partners__logo" src="./public/hk_logo_webb.svg" alt="Handelskammaren Värmland" />
          </div>
          <div className="grid grid__center">
            <img
              className="partners__logo"
              src="./public/UF-Logo-utsnitt-brun.-OBS!-Får-endast-användas-ihop-med-bruna-loggan.png"
              alt="Ung företagsamhet"
            />
          </div>
        </div>
      </ScrollSection>
    </>
  );
};
