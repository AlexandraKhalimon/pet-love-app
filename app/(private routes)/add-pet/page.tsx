import css from "./page.module.css";
import PetBlock from "@/components/PetBlock/PetBlock";
import AddPetForm from "@/components/AddPetForm/AddPetForm";

export default function AddPetPage() {
  return (
    <section className={css.section}>
      <PetBlock
        src="/images/pet-dog-mobile.png"
        tablet="/images/pet-dog-tablet.png"
        desktop="/images/pet-dog-desktop.png"
        alt="Dog with glasses"
        className={css.image}
      />
      <AddPetForm />
    </section>
  );
}
