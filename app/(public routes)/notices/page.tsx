"use client";

import NoticesFilters from "@/components/NoticesFilters/NoticesFilters";
import {
  fetchNoticeCategories,
  fetchNoticeSex,
  fetchNoticeSpecies,
} from "@/lib/api";
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
  return (
    <>
      <NoticesFilters
        search={handleSearch}
        categories={categories}
        sexes={sexes}
        types={types}
      />
    </>
  );
}
