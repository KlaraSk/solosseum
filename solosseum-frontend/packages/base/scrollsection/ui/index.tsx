import { type ReactNode } from "react";
import "./index.scss";

type Props = {
  children?: ReactNode;
  extraClasses?: string;
  id: string;
  label?: string;
};

export const ScrollSection = ({ children, extraClasses, id, label }: Props) => {
  return (
    <section id={id} tabIndex={-1} aria-label={label} className={`scroll-section ${extraClasses ?? ""}`.trim()}>
      {children}
    </section>
  );
};

// import { type ReactNode } from "react";
// import "./index.scss";

// type Props = {
//   children?: ReactNode;
//   extraClasses?: string;
//   id: string;
// };

// export const ScrollSection = ({ children, extraClasses, id }: Props) => {
//   return (
//     <section id={id} tabIndex={-1} className={`scroll-section ${extraClasses ?? ""}`.trim()}>
//       {children}
//     </section>
//   );
// };
