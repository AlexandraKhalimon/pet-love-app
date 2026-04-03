import css from "./UserCard.module.css";
import EditUserBtn from "../EditUserBtn/EditUserBtn";

export default function UserCard() {
  return (
    <section>
      <div className={css.header}>
        <p className={css.user}>
          User{" "}
          <svg className={css.icon} width={18} height={18}>
            <use href="/icons.svg#icon-user"></use>
          </svg>
        </p>
        <EditUserBtn />
      </div>
    </section>
  );
}
