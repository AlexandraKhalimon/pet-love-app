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
      <li className={`${css.login} ${css[border]}`}>
        <Link href="/login" onClick={onClose}>
          Log In
        </Link>
      </li>
      <li className={css.register}>
        <Link href="/register" onClick={onClose}>
          Registration
        </Link>
      </li>
    </ul>
  );
}
