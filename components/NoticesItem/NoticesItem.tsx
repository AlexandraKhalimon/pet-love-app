import css from "./NoticesItem.module.css";
import { Notice } from "@/types/notice";
import Image from "next/image";

interface Props {
  notice: Notice;
}

export default function NoticesItem({ notice }: Props) {
  const price = notice.price ? `$${notice.price}` : "Free";
  const birthday = notice.birthday.split("-").reverse().join(".");

  return (
    <li className={css.card}>
      <Image
        src={notice.imgURL}
        alt={notice.species}
        sizes="(max-width: 767px) 287px, (min-width: 768px) 294px, (min-width: 1280px) 315px"
        width={287}
        height={178}
        className={css.image}
      />
      <div className={css.details}>
        <div className={css.header}>
          <h3 className={css.title}>{notice.title}</h3>
          <p className={css.popularity}>
            <svg className={css.icon} width={16} height={16} aria-hidden="true">
              <use href="/icons.svg#icon-star"></use>
            </svg>{" "}
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
          <li className={css.item}>
            <p className={css.label}>Category</p>
            <p className={css.value}>{notice.category}</p>
          </li>
        </ul>
        <p className={css.comment}>{notice.comment}</p>
        <div className={css.footer}>
          <p className={css.price}>{price}</p>
          <div className={css.actions}>
            <button type="button" className={css.moreBtn}>
              Learn more
            </button>
            <button className={css.heartBtn} aria-label="Add to favorites">
              <svg
                width={18}
                height={18}
                className={css.icon}
                aria-hidden="true"
              >
                <use href="/icons.svg#icon-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
