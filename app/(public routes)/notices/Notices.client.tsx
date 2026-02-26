"use client";

import NoticesFilters from "@/components/NoticesFilters/NoticesFilters";
import {
  fetchCities,
  fetchNoticeCategories,
  fetchNotices,
  fetchNoticeSex,
  fetchNoticeSpecies,
} from "@/lib/api";
import { City } from "@/types/city";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function NoticesClient() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data } = useQuery({
    queryKey: ["notices", searchQuery, 1, 6],
    queryFn: () => fetchNotices({ keyword: searchQuery, page: 1, limit: 6 }),
  });

  if (data) {
    console.log(data?.results);
  }

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

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const getLocationOptions = async (query: string) => {
    if (!query) {
      return [];
    }
    const locations = await fetchCities({ keyword: query });

    return locations.map((location: City) => ({
      label: location.cityEn,
      value: location._id,
    }));
  };

  return (
    <>
      <NoticesFilters
        search={handleSearch}
        categories={categories}
        sexes={sexes}
        types={types}
        locations={getLocationOptions}
      />
    </>
  );
}
