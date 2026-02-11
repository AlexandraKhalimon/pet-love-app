import css from "./AuthNav.module.css";
import Link from "next/link";

interface Props {
  className?: string;
  border: "white" | "orange";
}

export default function AuthNav({ className, border }: Props) {
  return (
    <ul className={`${css.navigation} ${className}`}>
      <li className={`${css.login} ${css[border]}`}>
        <Link href="/login">Log In</Link>
      </li>
      <li className={css.register}>
        <Link href="/register">Registration</Link>
      </li>
    </ul>
  );
}
