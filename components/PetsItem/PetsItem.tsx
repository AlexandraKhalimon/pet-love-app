import css from "./PetsItem.module.css";
import { Pet } from "@/types/user";
import Image from "next/image";

interface Props {
  pet: Pet;
}

export default function PetsItem({ pet }: Props) {
  const title =
    pet.title.length > 18 ? pet.title.slice(0, 18) + "..." : pet.title;

  const birthday = pet.birthday
    ? pet.birthday.split("-").reverse().join(".")
    : "Unknown";

  return (
    <li className={css.card}>
      <Image
        src={pet.imgURL}
        alt={pet.species}
        sizes="(max-width: 767px) 66px, (min-width: 768px) 75px, (min-width: 1280px) 90px"
        width={66}
        height={66}
        className={css.image}
      />
      <div className={css.infoContainer}>
        <h3 className={css.title}>{title}</h3>
        <ul className={css.list}>
          <li className={css.item}>
            <p className={css.label}>Name</p>
            <p className={css.value}>{pet.name}</p>
          </li>
          <li className={css.item}>
            <p className={css.label}>Birthday</p>
            <p className={css.value}>{birthday}</p>
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
