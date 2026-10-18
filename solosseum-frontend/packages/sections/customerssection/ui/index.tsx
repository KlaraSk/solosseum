import { ScrollSection } from "@solosseum/scrollsection";
import "./index.scss";
import { customers } from "../../../../src/data/customers";
import { Quote } from "../../../base/quote";

type Props = {};

export const CustomersSection = ({}: Props) => {
  return (
    <>
      <ScrollSection id="kunder" label="kunder" extraClasses="bg-color__primary-soft flex flex__column flex__gap-3">
        <h2 className="heading-2">Kunder berättar</h2>
        <div className="flex flex__column flex__gap-2-5">
          {customers.map((customer) => {
            return <Quote customer={customer} />;
          })}
        </div>
      </ScrollSection>
    </>
  );
};
