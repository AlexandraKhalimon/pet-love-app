import css from "./AuthNav.module.css";
import Link from "next/link";

interface Props {
  className: string;
}

export default function AuthNav({ className }: Props) {
  return (
    <ul className={`${css.navigation} ${className}`}>
      <li className={css.login}>
        <Link href="/login">Log In</Link>
      </li>
      <li className={css.register}>
        <Link href="/register">Registration</Link>
      </li>
    </ul>
  );
}
