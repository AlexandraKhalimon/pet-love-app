import css from "./page.module.css";
import PetBlock from "@/components/PetBlock/PetBlock";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import Title from "@/components/Title/Title";

export default function Register() {
  return (
    <section className={css.section}>
      <PetBlock
        src="/images/pet-cat-mobile.jpg"
        alt="Cat"
        className={css.image}
      />
      <Title title={"Registration"} />
      <RegistrationForm />
    </section>
  );
}
