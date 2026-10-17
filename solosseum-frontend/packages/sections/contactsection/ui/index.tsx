import { ScrollSection } from "@solosseum/scrollsection";
import "./index.scss";
import { RoundedBox } from "@solosseum/roundedbox";
import { useState } from "react";
import { Form } from "@solosseum/form";

export const ContactSection = () => {
  const [isSent, setIsSent] = useState(false);

  return (
    <ScrollSection id="contact-section" extraClasses="bg-color__primary-muted">
      <div className="contact__top-div">
        <h2 className="heading-2 text-color-inverse">Kontakta mig</h2>
        <p className="text-body text-color-inverse">
          Är du intresserad av att diskutera hur jag kan hjälpa er organisation? Tveka inte att höra av dig så återkommer jag inom kort.
        </p>
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
