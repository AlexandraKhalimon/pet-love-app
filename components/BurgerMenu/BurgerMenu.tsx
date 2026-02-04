import { createPortal } from "react-dom";
import css from "./BurgerMenu.module.css";
import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";

interface Props {
  onClose: () => void;
}

export default function BurgerMenu({ onClose }: Props) {
  return createPortal(
    <div className={css.backdrop}>
      <div className={css.menu}>
        <button className={css.button} onClick={onClose}>
          <svg width={32} height={32} className={css.icon}>
            <use href="/icons.svg#icon-cross-small"></use>
          </svg>
        </button>
        <Nav />
        <AuthNav />
      </div>
    </div>,
    document.body,
  );
}
