import { ScrollSection } from "@solosseum/scrollsection";
import "./index.scss";
import { RoundedBox } from "@solosseum/roundedbox";
import { services } from "../../../../src/data/services";

type Props = {};

export const ServicesSection = ({}: Props) => {
  const generateBoxes = () => {
    return services.map((service) => {
      return (
        <RoundedBox extraClasses="bg-color__subtle flex__gap-0-5 service">
          <div className={`grid grid__center service__img-div bg-color__${service.iconBg} text-color-inverse`}>{service.icon} </div>
          <h3 className="heading-3 service__title">{service.title}</h3>
          <p className="text-body text-center">{service.text}</p>
        </RoundedBox>
      );
    });
  };

  return (
    <ScrollSection id="services-section" extraClasses="flex flex__column flex__gap-3 flex__align-center  text-color-primary services">
      <h2 className="heading-2">Tjänster</h2>
      <div className="flex flex__gap-2 flex__justify-center  services__div">{generateBoxes()}</div>
    </ScrollSection>
  );
};
