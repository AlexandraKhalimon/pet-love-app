import css from "./AddPet.module.css";
import Link from "next/link";

export default function AddPet() {
  return (
    <Link href="/add-pet" className={css.link}>
      Add pet{" "}
      <svg className={css.icon} width={18} height={18}>
        <use href="/icons.svg#icon-plus"></use>
      </svg>
    </Link>
  );
}
