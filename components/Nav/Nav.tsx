import Link from "next/link";
import css from "./Nav.module.css";

interface Props {
  className: string;
}

export default function Nav({ className }: Props) {
  return (
    <ul className={`${css.navigation} ${className}`}>
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
