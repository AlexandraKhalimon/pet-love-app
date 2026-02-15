"use client";

import css from './NewsList.module.css';
import { fetchNews } from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import NewsItem from "../NewsItem/NewsItem";

interface Props {
  search: string;
  currentPage: number;
}

export default function NewsList({ search, currentPage }: Props) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["news", search, currentPage],
    queryFn: () => fetchNews({ search, page: currentPage, limit: 6 }),
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

  return (
    <ul className={css.NewsList}>
      {data?.results.map((news) => (
        <li key={news._id}>
          <NewsItem news={news} />
        </li>
      ))}
    </ul>
  );
}
