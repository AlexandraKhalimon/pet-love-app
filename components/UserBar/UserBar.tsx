import { FullUser } from "@/types/user";
import css from "./UserBar.module.css";
import Link from "next/link";
import Image from "next/image";

interface Props {
  user: FullUser;
}

export default function UserBar({ user }: Props) {
  return (
    <>
      <Link href="/profile" className={css.link}>
        {user.avatar ? (
          <Image
            src={user.avatar}
            alt="User avatar"
            sizes="(max-width: 767px) 40px, (min-width: 768px) 50px"
            width={40}
            height={40}
            className={css.avatar}
          />
        ) : (
          <div className={css.image}>
            <svg className={css.icon} width={20} height={20}>
              <use href="/icons.svg#icon-user"></use>
            </svg>
          </div>
        )}
        <p className={css.name}>{user.name}</p>
      </Link>
    </>
  );
}
