"use client";

import css from "./NoticesFilters.module.css";
import { Category, Sex, Species } from "@/types/notice";
import SearchField from "../SearchField/SearchField";
import { useForm } from "react-hook-form";

interface FiltersFormValues {
  category: Category | "";
  sex: Sex | "";
  species: Species | "";
}

interface Props {
  search: (query: string) => void;
  categories: Category[];
  sexes: Sex[];
  types: Species[];
}

export default function NoticesFilters({
  search,
  categories,
  sexes,
  types,
}: Props) {
  const { register } = useForm<FiltersFormValues>({
    defaultValues: {
      category: "",
      sex: "",
      species: "",
    },
  });

  return (
    <form>
      <SearchField onSearch={search} />
      <div>
        <label>
          By category
          <select {...register("category")} className={css.select}>
            <option value="">Show all</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          By gender
          <select {...register("sex")} className={css.select}>
            <option value="">Show all</option>
            {sexes.map((sex) => (
              <option key={sex} value={sex}>
                {sex}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        By type
        <select {...register("species")} className={css.select}>
          <option value="">Show all</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}
