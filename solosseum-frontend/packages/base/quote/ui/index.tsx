import "./index.scss";

type Props = {
  customer: { id: number; img: string; quote: string; project: string };
};

export const Quote = ({ customer }: Props) => {
  return (
    <div className={`flex flex__align-center flex__gap-2 quote`} key={customer.id}>
      <div className="bg-color__subtle quote__img-div grid grid__center">
        <img src={customer.img} alt="" />
      </div>
      <div className="flex flex__column flex__gap-0-75">
        <p className="text-large">"{customer.quote}"</p>
        <h3>{customer.project}</h3>
      </div>
    </div>
  );
};
