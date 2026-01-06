import { type ReactNode } from "react";
import "./index.scss";

type Props = {
  children?: ReactNode;
  extraClasses?: string;
  alignLeft?: boolean;
};

export const RoundedBox = ({ children, extraClasses, alignLeft }: Props) => {
  return <div className={`flex flex__column ${alignLeft ? "" : "flex__align-center"} box ${extraClasses}`}>{children}</div>;
};
