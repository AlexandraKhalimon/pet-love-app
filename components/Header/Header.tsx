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

  const nav = <Nav className={css.nav} link={isHomepage ? "white" : "grey"} />;

  const authComponent = user ? (
    <UserNav user={user} />
  ) : (
    <AuthNav className={css.authNav} border={isHomepage ? "white" : "orange"} />
  );

  const menuBtn = (
    <button
      className={isHomepage ? css.homeButton : css.button}
      onClick={() => setIsMenuOpen(true)}
    >
      <svg width={32} height={32} className={css.icon}>
        <use href="/icons.svg#icon-menu"></use>
      </svg>
    </button>
  );

  const headerActions = (
    <div className={css.headerActions}>
      {authComponent}
      {menuBtn}
    </div>
  );

  return isHomepage ? (
    <header className={css.homeHeader}>
      <div className={css.headerWrapper}>
        <Link href="/home" className={css.logo}>
          <svg width={76} height={20} className={css.icon}>
            <use href="/icons.svg#icon-logo-2"></use>
          </svg>
        </Link>
        {nav}
        {headerActions}
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
      {nav}
      {headerActions}
      {isMenuOpen && <BurgerMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}
