"use client";

import css from "./SearchField.module.css";
import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchField({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query.trim());
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={css.search}>
      <input
        className={css.input}
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleEnter}
        placeholder="Search"
      />
      <button
        className={css.button}
        type="button"
        aria-label="Search"
        onClick={handleSearch}
      >
        <svg width={18} height={18} className={css.icon} aria-hidden="true">
          <use href="/icons.svg#icon-search"></use>
        </svg>
      </button>
      {query && (
        <button
          className={css.cross}
          type="button"
          aria-label="Clear query"
          onClick={() => setQuery("")}
        >
          <svg width={18} height={18} className={css.icon} aria-hidden="true">
            <use href="/icons.svg#icon-cross-small"></use>
          </svg>
        </button>
      )}
    </div>
  );
}
