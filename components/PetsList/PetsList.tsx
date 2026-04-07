import css from "./PetsList.module.css";
import { Pet } from "@/types/user";
import PetsItem from "../PetsItem/PetsItem";

interface Props {
  pets: Pet[];
}

export default function PetsList({ pets }: Props) {
  return (
    <ul className={css.list}>
      {pets.map((pet) => (
        <PetsItem pet={pet} key={pet._id} />
      ))}
    </ul>
  );
}
