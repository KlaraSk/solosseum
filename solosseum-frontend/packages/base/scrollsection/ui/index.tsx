import type { ReactNode } from "react";
import "./index.scss";

type Props = {
  children?: ReactNode;

  extraClasses?: string;
};

export const ScrollSection = ({ children, extraClasses }: Props) => {
  return <section className={`scroll-section ${extraClasses}`}>{children}</section>;
};

/**
 * A section with 100vh
 */
