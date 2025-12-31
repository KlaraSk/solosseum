import "./index.scss";
import { forwardRef, type ReactNode } from "react";

type Props = {
  text?: string;
  children?: ReactNode;
  extraClasses?: string;
  onClick: () => void;
  aria: string;
  type?: "submit" | "reset";
  isDisabled?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, Props>(({ text, children, extraClasses, onClick, aria, type, isDisabled }, ref) => {
  return (
    <button
      ref={ref}
      aria-label={aria}
      type={type ? type : "button"}
      disabled={isDisabled}
      onClick={onClick}
      className={`btn text-body ${extraClasses}`}
    >
      {text}
      {children}
    </button>
  );
});

Button.displayName = "Button";
