// Компонент закоментований для тестів

import SearchField from "@/components/SearchField/SearchField";
import css from "./page.module.css";
import Title from "@/components/Title/Title";
import NewsList from "@/components/NewsList/NewsList";

export default function News() {
  return (
    <section className={css.section}>
      <div className={css.newsHeader}>
        <Title title={"News"} />
        <SearchField />
      </div>
      <NewsList />
    </section>
  );
}
