import { Navigation } from "@solosseum/navigation";
import "./index.scss";

type Props = {};

export const Header = ({}: Props) => {
  return (
    <header className="header">
      <Navigation />
    </header>
  );
};

/**
 * Header component
 */
