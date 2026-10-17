import { useCallback, useEffect, useRef, useState } from "react";

const FIRST_SECTION = "start-section";
const UNLOCK_DELAY = 150; // ms utan scroll innan observern får köra igen

export const useActiveSection = (initial = FIRST_SECTION) => {
  const [active, setActive] = useState(() => window.location.hash.slice(1) || initial);

  const lockedRef = useRef(false);
  const timerRef = useRef<number | undefined>(undefined);

  // Starta (eller starta om) nedräkningen till att låset släpps
  const scheduleUnlock = useCallback(() => {
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      lockedRef.current = false;
    }, UNLOCK_DELAY);
  }, []);

  // Anropas vid menyklick: lås observern och sätt målet direkt
  const navigateTo = useCallback(
    (id: string) => {
      lockedRef.current = true;
      scheduleUnlock();
      setActive(id);
    },
    [scheduleUnlock],
  );

  // 1. Observera vilken sektion som är aktiv (ignoreras medan den är låst)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (lockedRef.current) return;
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

  // 2. Medan låst: förläng låset så länge scrollen pågår
  useEffect(() => {
    const container = document.querySelector<HTMLElement>(".app");
    if (!container) return;

    const onScroll = () => {
      if (lockedRef.current) scheduleUnlock();
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", onScroll);
      window.clearTimeout(timerRef.current);
    };
  }, [scheduleUnlock]);

  // 3. Håll URL:en i synk med aktiv sektion
  useEffect(() => {
    const current = window.location.hash.slice(1);
    const target = active === FIRST_SECTION ? "" : active;
    if (current === target) return;

    const url = target ? `#${target}` : window.location.pathname + window.location.search;
    history.replaceState(null, "", url);
  }, [active]);

  return [active, navigateTo] as const;
};
