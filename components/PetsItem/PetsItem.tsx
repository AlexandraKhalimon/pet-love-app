import css from "./PetsItem.module.css";
import { Pet } from "@/types/user";
import Image from "next/image";

interface Props {
  pet: Pet;
}

export default function PetsItem({ pet }: Props) {
  return (
    <li className={css.card}>
      <Image
        src={pet.imgURL}
        alt={pet.species}
        width={66}
        height={66}
        className={css.image}
      />
      <div className={css.infoContainer}>
        <h3 className={css.title}>{pet.title}</h3>
        <ul className={css.list}>
          <li className={css.item}>
            <p className={css.label}>Name</p>
            <p className={css.value}>{pet.name}</p>
          </li>
          <li className={css.item}>
            <p className={css.label}>Birthday</p>
            <p className={css.value}>{pet.birthday}</p>
          </li>
          <li className={css.item}>
            <p className={css.label}>Sex</p>
            <p className={css.value}>{pet.sex}</p>
          </li>
          <li className={css.item}>
            <p className={css.label}>Species</p>
            <p className={css.value}>{pet.species}</p>
          </li>
        </ul>
      </div>
      <button type="button" className={css.trash}>
        <svg className={css.icon} width={16} height={16}>
          <use href="/icons.svg#icon-trash"></use>
        </svg>
      </button>
    </li>
  );
}
