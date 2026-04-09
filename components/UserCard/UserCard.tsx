import css from "./UserCard.module.css";
import EditUserBtn from "../EditUserBtn/EditUserBtn";
import UserBlock from "../UserBlock/UserBlock";
import { FullUser, Pet } from "@/types/user";
import PetsBlock from "../PetsBlock/PetsBlock";
import LogOutBtn from "../LogOutBtn/LogOutBtn";

interface Props {
  user: FullUser;
  pets: Pet[];
}

export default function UserCard({ user, pets }: Props) {
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
      <PetsBlock pets={pets} />
      <LogOutBtn />
    </section>
  );
}
