export const scrollToSection = (id: string) => {
  const container = document.querySelector<HTMLElement>(".app");
  const el = document.getElementById(id);
  if (!container || !el) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = container.scrollTop + el.getBoundingClientRect().top - container.getBoundingClientRect().top;

  container.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
};
