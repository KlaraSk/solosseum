import { Navigation } from "@solosseum/navigation";
import "./index.scss";

type Props = {};

export const Header = ({}: Props) => {
  return (
    <header id="header" className="flex header">
      <div className="flex flex__align-center header__logo-div">
        <a href="">
          <img src="/solosseum-logo.svg" alt="Solosseum AB" />
        </a>
      </div>
      <Navigation />
    </header>
  );
};
