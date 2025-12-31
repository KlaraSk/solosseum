import { type ReactNode } from "react";
import "./index.scss";

type Props = {
  children?: ReactNode;
  extraClasses?: string;
  id: string;
};

export const ScrollSection = ({ children, extraClasses, id }: Props) => {
  return (
    <section id={id} className={`scroll-section ${extraClasses}`}>
      {children}
    </section>
  );
};
