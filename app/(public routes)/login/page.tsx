import css from "./page.module.css";
import PetBlock from "@/components/PetBlock/PetBlock";

export default function Login() {
  return (
    <section className={css.section}>
      <PetBlock
        src="/images/pet-corgi-mobile.png"
        tablet="/images/pet-corgi-tablet.png"
        desktop="/images/pet-corgi-desktop.png"
        alt="Corgi"
      />
    </section>
  );
}
