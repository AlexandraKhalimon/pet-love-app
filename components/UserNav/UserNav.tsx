"use client";

import css from "./UserNav.module.css";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import { usePathname } from "next/navigation";
import UserBar from "../UserBar/UserBar";
import { FullUser } from "@/types/user";

interface Props {
  user: FullUser;
}

export default function UserNav({ user }: Props) {
  const pathname = usePathname();
  const isHomePage = pathname === "/home";

  const logout = isHomePage ? css.homeLogout : css.logout;

  return (
    <div className={css.wrapper}>
      <LogOutBtn className={logout} />
      <UserBar user={user} />
    </div>
  );
}
