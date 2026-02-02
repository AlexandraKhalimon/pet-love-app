import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <Link href="/home">
        <svg width={76} height={20} className={css.icon}>
          <use href="/icons.svg#icon-logo-1"></use>
        </svg>
      </Link>
      <button className={css.button}>
        <svg width={32} height={32} className={css.icon}>
          <use href="/icons.svg#icon-menu"></use>
        </svg>
      </button>
    </header>
  );
}
