import css from "./ModalNotice.module.css";
import Image from "next/image";
import { Notice } from "@/types/notice";

interface Props {
  notice: Notice;
}

export default function ModalNotice({ notice }: Props) {
  const price = notice.price ? `$${notice.price}` : "Free";
  const birthday = notice.birthday
    ? notice.birthday.split("-").reverse().join(".")
    : "Unknown";

  return (
    <>
      <div className={css.pet}>
        <p className={css.category}>{notice.category}</p>
        <Image
          src={notice.imgURL}
          alt={notice.species}
          width={120}
          height={120}
          className={css.image}
        />
      </div>
      <div>
        <h3 className={css.title}>{notice.title}</h3>
        <p className={css.popularity}>
          <svg className={css.icon} width={16} height={16}>
            <use href="/icons.svg#icon-star"></use>
          </svg>
          {""}
          {notice.popularity}
        </p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.label}>Name</p>
          <p className={css.value}>{notice.name}</p>
        </li>
        <li className={css.item}>
          <p className={css.label}>Birthday</p>
          <p className={css.value}>{birthday}</p>
        </li>
        <li className={css.item}>
          <p className={css.label}>Sex</p>
          <p className={css.value}>{notice.sex}</p>
        </li>
        <li className={css.item}>
          <p className={css.label}>Species</p>
          <p className={css.value}>{notice.species}</p>
        </li>
      </ul>
      <p className={css.comment}>{notice.comment}</p>
      <p className={css.price}>{price}</p>
      <div className={css.navigation}>
        <button className={css.favorite}>
          Add to{" "}
          <svg className={css.icon} width={18} height={18}>
            <use href="/icons.svg#icon-heart"></use>
          </svg>
        </button>
        <a className={css.contact} href="tel:+380123456789">
          Contact
        </a>
      </div>
    </>
  );
}
