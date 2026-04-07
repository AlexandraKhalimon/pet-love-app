import css from "./PetsBlock.module.css";
import AddPet from "../AddPet/AddPet";
import PetsList from "../PetsList/PetsList";
import { Pet } from "@/types/user";

interface Props {
  pets: Pet[];
}

export default function PetsBlock({ pets }: Props) {
  return (
    <>
      <div className={css.headingContainer}>
        <h2 className={css.heading}>My pets</h2>
        <AddPet />
      </div>
      <PetsList pets={pets} />
    </>
  );
}
