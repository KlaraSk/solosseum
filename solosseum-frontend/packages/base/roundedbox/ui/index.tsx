import { type ReactNode } from "react";
import "./index.scss";

type Props = {
  children?: ReactNode;
  extraClasses?: string;
};

export const RoundedBox = ({ children, extraClasses }: Props) => {
  return <div className={`flex flex__column flex__align-center box ${extraClasses}`}>{children}</div>;
};
