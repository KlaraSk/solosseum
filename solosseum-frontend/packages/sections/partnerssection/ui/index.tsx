import { ScrollSection } from "@solosseum/scrollsection";
import "./index.scss";
import { RoundedBox } from "@solosseum/roundedbox";

type Props = {};

export const PartnersSection = ({}: Props) => {
  return (
    <>
      <ScrollSection
        id="samarbeten"
        extraClasses="flex flex__column flex__justify-center flex__gap-3 bg-color__primary-muted"
        label="samarbeten"
      >
        <h2 className="heading-2 text-color-primary text-center text-color-inverse">Samarbeten</h2>
        <div className="flex flex__gap-3 partners">
          <RoundedBox extraClasses="bg-color__subtle text-center flex__gap-1 partners__card">
            <a className="partners__link" href="https://ungforetagsamhet.se/" target="_blank" rel="noopener noreferrer">
              <img className="partners__logo" src="/uf_logo_svart_tranc_2022_kopia_0.png" alt="Ung företagsamhet" />
            </a>

            <p className="text-body">
              Stolt silverpartner till Ung Företagsamhet som årligen i Värmland startar 650 bolag samt engagerar omkring 16 000 elever som
              får träna på entreprenörsskap i skolan.
            </p>
          </RoundedBox>

          <RoundedBox extraClasses="bg-color__subtle text-center flex__gap-1 partners__card">
            <a className="partners__link" href="https://www.momenta.se/" target="_blank" rel="noopener noreferrer">
              <img className="partners__logo" src="/Flexbert-logo.avif" alt="Flexbert" />
            </a>
            <p className="text-body">
              Vi är med i Flexberts trafiksäkerhetskampanj! Vi anser att barnens säkerhet i trafiken är viktig, därför är vi med och förser
              fler barn med reflexprodukter.
            </p>
          </RoundedBox>
        </div>
        <footer className="grid grid__center">
          <img className="partners__logo-solosseum" src="/solosseum-logo-subtle-white.png" alt="Solosseum AB" />
        </footer>
      </ScrollSection>
    </>
  );
};
