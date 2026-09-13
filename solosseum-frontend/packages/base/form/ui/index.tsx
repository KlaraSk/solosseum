import "./index.scss";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import clsx from "clsx";
import { useRef, type Dispatch, type SetStateAction } from "react";
import { Button } from "@solosseum/button";

type Props = { isSent: boolean; setIsSent: Dispatch<SetStateAction<boolean>> };

export const Form = ({ isSent, setIsSent }: Props) => {
  const form = useRef<HTMLFormElement>(null);

  // Regular expression from MDN for email validation as per HTML specification.
  const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

  // Regular expression from ChatGPT for name validation.
  const nameRegExp = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}(?: [A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50})*$/;

  // React form validator
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { user_name: "", user_email: "", message: "", name2: "", email2: "" } });

  console.log(errors);

  const formClassNames = clsx("flex", "flex__column", "flex__gap-2", "heading-4", "font-color-black", "contact__form", {
    "d-none": isSent,
  });

  const sendEmail = () => {
    form.current &&
      emailjs
        .sendForm("service_cxuz6ie", "contact_form", form.current, {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setIsSent(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          },
        );
  };

  return (
    <form
      className={formClassNames}
      noValidate
      ref={form}
      onSubmit={handleSubmit((data) => {
        console.log(data);
        sendEmail();
      })}
    >
      <label className="flex flex__column contact__label">
        Namn (obligatoriskt) <span className="contact__error">{errors.user_name?.message}</span>
        <input
          type="text"
          required
          className="flex contact__input"
          {...register("user_name", {
            required: "Fyll i ett namn",
            minLength: { value: 3, message: "Namnet måste vara minst 3 tecken" },
            pattern: { value: nameRegExp, message: "Namnet får endast innehålla bokstäver." },
          })}
        />
      </label>
      <label className="flex flex__column contact__label">
        Mejladress (obligatoriskt) <span className="contact__error">{errors.user_email?.message}</span>
        <input
          type="email"
          required
          className="flex contact__input"
          {...register("user_email", {
            required: "Fyll i en mailadress",
            pattern: { value: emailRegExp, message: "Fyll i en giltig mailadress" },
          })}
        />
      </label>
      <label className="flex flex__column contact__label">
        Meddelande (obligatoriskt) <span className="contact__error">{errors.message?.message}</span>
        <textarea className="contact__message body" {...register("message", { required: "Skriv ett meddelande", minLength: 5 })} required />
      </label>
      <Button onClick={() => console.log("Formulär skickat")} type="submit" aria="Skicka kontaktformulär">
        Skicka
      </Button>
    </form>
  );
};
