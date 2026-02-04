import Link from "next/link";
import css from "./Nav.module.css";

export default function Nav() {
  return (
    <ul className={css.navigation}>
      <li className={css.link}>
        <Link href="/news">News</Link>
      </li>
      <li className={css.link}>
        <Link href="/notices">Find pet</Link>
      </li>
      <li className={css.link}>
        <Link href="/friends">Our friends</Link>
      </li>
    </ul>
  );
}
