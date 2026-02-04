import css from "./AuthNav.module.css";
import Link from "next/link";

export default function AuthNav() {
  return (
    <ul className={css.navigation}>
      <li className={css.login}>
        <Link href="/login">Log In</Link>
      </li>
      <li className={css.register}>
        <Link href="/register">Registration</Link>
      </li>
    </ul>
  );
}
