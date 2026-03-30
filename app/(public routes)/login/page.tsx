import css from "./page.module.css";
import PetBlock from "@/components/PetBlock/PetBlock";
import Title from "@/components/Title/Title";
import LoginForm from "@/components/LoginForm/LoginForm";

export default function Login() {
  return (
    <section className={css.section}>
      <PetBlock
        src="/images/pet-corgi-mobile.png"
        tablet="/images/pet-corgi-tablet.png"
        desktop="/images/pet-corgi-desktop.png"
        alt="Corgi"
      />
      <div className={css.form}>
        <Title title="Log in" />
        <LoginForm />
      </div>
    </section>
  );
}
