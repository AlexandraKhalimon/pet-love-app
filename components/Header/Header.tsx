"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import AuthNav from "../AuthNav/AuthNav";
import Nav from "../Nav/Nav";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/lib/store/authStore";
import UserNav from "../UserNav/UserNav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/home";

  const user = useAuthStore((state) => state.user);

  return isHomepage ? (
    <header className={css.homeHeader}>
      <div className={css.headerWrapper}>
        <Link href="/home" className={css.logo}>
          <svg width={76} height={20} className={css.icon}>
            <use href="/icons.svg#icon-logo-2"></use>
          </svg>
        </Link>
        <Nav className={css.nav} link={"white"} />
        {user ? (
          <UserNav />
        ) : (
          <AuthNav className={css.authNav} border={"white"} />
        )}
        <button className={css.homeButton} onClick={() => setIsMenuOpen(true)}>
          <svg width={32} height={32} className={css.icon}>
            <use href="/icons.svg#icon-menu"></use>
          </svg>
        </button>
        {isMenuOpen && <BurgerMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </header>
  ) : (
    <header className={css.header}>
      <Link href="/home" className={css.logo}>
        <svg width={76} height={20} className={css.icon}>
          <use href="/icons.svg#icon-logo-1"></use>
        </svg>
      </Link>
      <Nav className={css.nav} link={"grey"} />
      {user ? (
        <UserNav />
      ) : (
        <AuthNav className={css.authNav} border={"orange"} />
      )}
      <button className={css.button} onClick={() => setIsMenuOpen(true)}>
        <svg width={32} height={32} className={css.icon}>
          <use href="/icons.svg#icon-menu"></use>
        </svg>
      </button>
      {isMenuOpen && <BurgerMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}
