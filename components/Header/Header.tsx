"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <Link href="/home">
        <svg width={76} height={20} className={css.icon}>
          <use href="/icons.svg#icon-logo-1"></use>
        </svg>
      </Link>
      <button className={css.button} onClick={() => setIsMenuOpen(true)}>
        <svg width={32} height={32} className={css.icon}>
          <use href="/icons.svg#icon-menu"></use>
        </svg>
      </button>
      {isMenuOpen && <BurgerMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}
