import css from "./AuthNav.module.css";
import Link from "next/link";

interface Props {
  className?: string;
  border: "white" | "orange";
  onClose?: () => void;
}

export default function AuthNav({ className, border, onClose }: Props) {
  return (
    <ul className={`${css.navigation} ${className}`}>
      <li>
        <Link
          href="/login"
          onClick={onClose}
          className={`${css.login} ${css[border]}`}
        >
          Log In
        </Link>
      </li>
      <li>
        <Link href="/register" onClick={onClose} className={css.register}>
          Registration
        </Link>
      </li>
    </ul>
  );
}
