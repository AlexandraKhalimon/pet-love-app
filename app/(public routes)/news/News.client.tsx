"use client";

import css from "./page.module.css";
import SearchField from "@/components/SearchField/SearchField";
import Title from "@/components/Title/Title";
import NewsList from "@/components/NewsList/NewsList";
import { useState } from "react";
import { useDebounce } from "use-debounce";

export default function NewsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };
  return (
    <section className={css.section}>
      <div className={css.newsHeader}>
        <Title title={"News"} />
        <SearchField onSearch={handleSearch} />
      </div>
      <NewsList search={debouncedSearchQuery} currentPage={currentPage} />
    </section>
  );
}
