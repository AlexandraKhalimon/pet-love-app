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
      <li>
        <Link
          href="/news"
          onClick={onClose}
          className={`${css.link} ${css[link]} ${news}`}
        >
          News
        </Link>
      </li>
      <li>
        <Link
          href="/notices"
          onClick={onClose}
          className={`${css.link} ${css[link]} ${notices}`}
        >
          Find pet
        </Link>
      </li>
      <li>
        <Link
          href="/friends"
          onClick={onClose}
          className={`${css.link} ${css[link]} ${friends}`}
        >
          Our friends
        </Link>
      </li>
    </ul>
  );
}
