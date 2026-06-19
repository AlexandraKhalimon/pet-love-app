"use client";

import css from "./Nav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
  link: "white" | "grey";
  onClose?: () => void;
}

export default function Nav({ className, link, onClose }: Props) {
  const pathname = usePathname();
  const news = pathname === "/news" && link === "grey" ? css.active : "";
  const notices = pathname === "/notices" && link === "grey" ? css.active : "";
  const friends = pathname === "/friends" && link === "grey" ? css.active : "";

  return (
    <ul className={`${css.navigation} ${className}`}>
      <li className={`${css.link} ${css[link]} ${news}`}>
        <Link href="/news" onClick={onClose}>
          News
        </Link>
      </li>
      <li className={`${css.link} ${css[link]} ${notices}`}>
        <Link href="/notices" onClick={onClose}>
          Find pet
        </Link>
      </li>
      <li className={`${css.link} ${css[link]} ${friends}`}>
        <Link href="/friends" onClick={onClose}>
          Our friends
        </Link>
      </li>
    </ul>
  );
}
