// src/hooks/useActiveSection.ts
import { useEffect, useState } from "react";

export const useActiveSection = (initial = "start-section") => {
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      {
        root: document.querySelector(".app"),
        rootMargin: "-50% 0px -49% 0px",
        threshold: 0,
      },
    );
    document.querySelectorAll(".scroll-section").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return [active, setActive] as const;
};
