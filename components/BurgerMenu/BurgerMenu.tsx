"use client";

import { createPortal } from "react-dom";
import css from "./BurgerMenu.module.css";
import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import { usePathname } from "next/navigation";

interface Props {
  onClose: () => void;
}

export default function BurgerMenu({ onClose }: Props) {
  const pathname = usePathname();
  const isHomePage = pathname === "/home";

  const menuBackground = isHomePage ? css.white : css.orange;
  const icon = isHomePage ? css.blackIcon : css.whiteIcon;
  const nav = isHomePage ? "grey" : "white";
  const auth = isHomePage ? "orange" : "white";

  return createPortal(
    <div className={css.backdrop}>
      <div className={`${css.menu} ${menuBackground}`}>
        <button className={css.button} onClick={onClose}>
          <svg width={32} height={32} className={icon}>
            <use href="/icons.svg#icon-cross-small"></use>
          </svg>
        </button>
        <Nav link={nav} />
        <AuthNav border={auth} />
      </div>
    </div>,
    document.body,
  );
}
