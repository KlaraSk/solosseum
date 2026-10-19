import { ScrollSection } from "@solosseum/scrollsection";
import "./index.scss";
import { RoundedBox } from "@solosseum/roundedbox";
import { useState } from "react";
import { Form } from "@solosseum/form";
import { PiPhone, PiEnvelopeSimple } from "react-icons/pi";

export const ContactSection = () => {
  const [isSent, setIsSent] = useState(false);

  return (
    <ScrollSection id="kontakt" extraClasses="flex flex__gap-3  bg-color__primary-muted contact" label="Kontakt">
      <div className="contact__top-div text-color-inverse">
        <h2 className="heading-2">Kontakta mig</h2>
        <p className="text-body">
          Är du intresserad av att diskutera hur jag kan hjälpa er organisation? Tveka inte att höra av dig så återkommer jag inom kort.
        </p>
        <ul className="flex flex__column contact__list">
          <li className="flex contact__item">
            <PiPhone className="contact__icon" aria-hidden="true" />
            <a className="text-body contact__link" href="tel:+4654220969">
              +46 54 220 96 69
            </a>
          </li>
          <li className="flex contact__item">
            <PiEnvelopeSimple className="contact__icon" aria-hidden="true" />
            <a className="text-body contact__link" href="mailto:info@solosseum.se">
              info@solosseum.se
            </a>
          </li>
        </ul>
      </div>
      <RoundedBox extraClasses="bg-color__base">
        <Form isSent={isSent} setIsSent={setIsSent} />

        {isSent && (
          <div className="contact__success" role="status">
            <h3 className="heading-3 text-color-primary">Tack!</h3>
            <p className="text-body text-color-dark">Jag har tagit emot ditt meddelande och återkommer så snart jag kan.</p>
          </div>
        )}
      </RoundedBox>
    </ScrollSection>
  );
};
