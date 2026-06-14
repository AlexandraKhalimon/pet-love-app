"use client";

import Title from "@/components/Title/Title";
import css from "./page.module.css";
import NoticesFilters from "@/components/NoticesFilters/NoticesFilters";
import {
  fetchLocations,
  fetchNoticeCategories,
  fetchNotices,
  fetchNoticeSex,
  FetchNoticesParams,
  fetchNoticeSpecies,
} from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import NoticesList from "@/components/NoticesList/NoticesList";
import Pagination from "@/components/Pagination/Pagination";

export default function NoticesClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<Partial<FetchNoticesParams>>({});
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useQuery({
    queryKey: ["notices", filters, debouncedSearchQuery, currentPage, 6],
    queryFn: () =>
      fetchNotices({
        keyword: debouncedSearchQuery,
        ...filters,
        page: currentPage,
        limit: 6,
      }),
    placeholderData: keepPreviousData,
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchNoticeCategories,
  });

  const { data: sexes = [] } = useQuery({
    queryKey: ["sexes"],
    queryFn: fetchNoticeSex,
  });

  const { data: types = [] } = useQuery({
    queryKey: ["types"],
    queryFn: fetchNoticeSpecies,
  });

  const { data: cities = [] } = useQuery({
    queryKey: ["cities"],
    queryFn: () => fetchLocations(),
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFiltersChange = (newFilters: Partial<FetchNoticesParams>) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const cityOptions = cities.map((city) => ({
    value: city._id,
    label: `${city.stateEn}, ${city.cityEn}`,
  }));

  const totalPages = data?.totalPages ?? 0;

  return (
    <section className={css.section}>
      <Title title={"Find your favorite pet"} />
      <NoticesFilters
        search={handleSearch}
        categories={categories}
        sexes={sexes}
        types={types}
        locations={cityOptions}
        onFiltersChange={handleFiltersChange}
      />
      {data && data.results.length > 0 && (
        <NoticesList notices={data.results} variant="notices" />
      )}
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </section>
  );
}
