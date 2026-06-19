"use client";

import css from "./UserNav.module.css";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import { usePathname } from "next/navigation";

export default function UserNav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/home";

  const logout = isHomePage ? css.homeLogout : css.logout;

  return (
    <>
      <LogOutBtn className={logout} />
    </>
  );
}
