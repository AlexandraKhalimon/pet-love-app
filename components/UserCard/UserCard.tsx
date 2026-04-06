import css from "./UserCard.module.css";
import EditUserBtn from "../EditUserBtn/EditUserBtn";
import UserBlock from "../UserBlock/UserBlock";
import { FullUser } from "@/types/user";

interface Props {
  user: FullUser;
}

export default function UserCard({ user }: Props) {
  return (
    <section className={css.section}>
      <div className={css.header}>
        <p className={css.user}>
          User{" "}
          <svg className={css.icon} width={18} height={18}>
            <use href="/icons.svg#icon-user"></use>
          </svg>
        </p>
        <EditUserBtn />
      </div>
      <UserBlock user={user} />
    </section>
  );
}
