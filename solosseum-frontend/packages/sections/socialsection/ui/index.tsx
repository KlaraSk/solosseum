import { ScrollSection } from "@solosseum/scrollsection";
import "./index.scss";
import { useEffect, useState } from "react";

type Props = {};

const getBreakpoint = () => {
  const w = window.innerWidth;
  if (w <= 582) return "mobile";
  if (w <= 992) return "tablet";
  return "desktop";
};

export const SocialSection = ({}: Props) => {
  const [bp, setBp] = useState(getBreakpoint);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setBp(getBreakpoint()), 250); // debounce
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <ScrollSection id="sociala-medier" label="sociala-medier">
        <h2 className="heading-2 some__heading">Solosseum på LinkedIn</h2>

        <iframe
          key={bp}
          src="https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25722948"
          title="LinkedIn-profil"
          loading="lazy"
          className="linkedin-iframe"
        ></iframe>
      </ScrollSection>
    </>
  );
};
