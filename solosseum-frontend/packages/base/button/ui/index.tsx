import "./index.scss";
import { forwardRef, type ReactNode } from "react";
import clsx from "clsx";

type Props = {
  text?: string;
  children?: ReactNode;
  extraClasses?: string;
  onClick?: () => void;
  aria?: string;
  type?: "submit" | "reset" | "button";
  isDisabled?: boolean;
  variant?: "primary";
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ text, children, extraClasses, onClick, aria, type = "button", isDisabled, variant }, ref) => {
    return (
      <button
        ref={ref}
        aria-label={aria}
        type={type}
        disabled={isDisabled}
        onClick={onClick}
        className={clsx("btn", "text-body", variant && `btn__${variant}`, extraClasses)}
      >
        {text}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
