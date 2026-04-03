import css from "./page.module.css";
import UserCard from "@/components/UserCard/UserCard";

export default function ProfilePage() {
  return (
    <section className={css.section}>
      <UserCard />
    </section>
  );
}
