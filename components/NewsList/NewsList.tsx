"use client";

import { fetchNews } from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

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
    <ul>
      {data?.results.map((news) => (
        <li key={news._id}></li>
      ))}
    </ul>
  );
}
