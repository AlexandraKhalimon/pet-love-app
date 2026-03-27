import css from "./page.module.css";
import PetBlock from "@/components/PetBlock/PetBlock";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import Title from "@/components/Title/Title";

export default function Register() {
  return (
    <section className={css.section}>
      <PetBlock
        src="/images/pet-cat-mobile.png"
        tablet="/images/pet-cat-tablet.png"
        desktop="/images/pet-cat-desktop.png"
        alt="Cat"
        className={css.image}
      />
      <div className={css.form}>
        <Title title={"Registration"} />
        <RegistrationForm />
      </div>
    </section>
  );
}
