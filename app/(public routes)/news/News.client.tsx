"use client";

import css from "./page.module.css";
import SearchField from "@/components/SearchField/SearchField";
import Title from "@/components/Title/Title";
import NewsList from "@/components/NewsList/NewsList";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { fetchNews } from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export default function NewsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);

  const { data, isLoading, error } = useQuery({
    queryKey: ["news", debouncedSearchQuery, currentPage],
    queryFn: () =>
      fetchNews({ search: debouncedSearchQuery, page: currentPage, limit: 6 }),
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Sorry, there is an error</p>;
  }

  if (data) {
    console.log(data);
  }

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
      {data && data.results.length > 0 && <NewsList news={data.results} />}
    </section>
  );
}
