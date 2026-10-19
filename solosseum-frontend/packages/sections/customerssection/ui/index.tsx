import { ScrollSection } from "@solosseum/scrollsection";
import "./index.scss";
import { customers } from "../../../../src/data/customers";
import { Quote } from "../../../base/quote";

type Props = {};

export const CustomersSection = ({}: Props) => {
  return (
    <>
      <ScrollSection id="kunder" label="kunder" extraClasses=" grid grid__center customers bg-color__subtle">
        <div className="customers__img-div">
          <img className="customers__img" src="/solosseum-customers.png" alt="" />
        </div>
        <div className="customers__text-div flex flex__column flex__gap-0-75">
          <h2 className="heading-2">Kunder</h2>
          <p className="text-body">
            Solosseums vanligaste kund är ett medelstort privat/familjeägt bolag med mellan 100-500 anställda. <br /> <br />
            Vi har arbetat med många av de klassiska värmländska familjeägda bolagen, men har även erfarenhet från uppdrag med större
            börsnoterade aktörer. Oftast inom tillverkande industri samt tjänstesektorn.
          </p>
        </div>
        {/* <div className="flex flex__column flex__gap-2-5">
          {customers.map((customer) => {
            return <Quote customer={customer} />;
          })}
        </div> */}
      </ScrollSection>
    </>
  );
};
