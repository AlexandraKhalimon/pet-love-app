import css from "./UserNav.module.css";
import LogOutBtn from "../LogOutBtn/LogOutBtn";

export default function UserNav() {
  return (
    <>
      <LogOutBtn className={css.logout} />
    </>
  );
}
