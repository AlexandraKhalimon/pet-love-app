//This page is currently used for testing

"use client";

import NoticesFilters from "@/components/NoticesFilters/NoticesFilters";
import {
  fetchCities,
  fetchNoticeCategories,
  fetchNoticeSex,
  fetchNoticeSpecies,
} from "@/lib/api";
import { City } from "@/types/city";
import { Category, Sex, Species } from "@/types/notice";
import { useEffect, useState } from "react";

export default function Notices() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [sexes, setSexes] = useState<Sex[]>([]);
  const [types, setTypes] = useState<Species[]>([]);

  useEffect(() => {
    fetchNoticeCategories().then(setCategories);
    fetchNoticeSex().then(setSexes);
    fetchNoticeSpecies().then(setTypes);
  }, [categories, sexes, types]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const getLocationOptions = async (query: string) => {
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
