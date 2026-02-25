"use client";

import css from "./NoticesFilters.module.css";
import { Category, Sex, Species } from "@/types/notice";
import SearchField from "../SearchField/SearchField";
import { Controller, useForm } from "react-hook-form";
import AsyncSelect from "react-select/async";

interface LocationSelect {
  label: string;
  value: string;
}

interface FiltersFormValues {
  category: Category | "";
  sex: Sex | "";
  species: Species | "";
  location: LocationSelect | null;
  notice: string;
}

interface Props {
  search: (query: string) => void;
  categories: Category[];
  sexes: Sex[];
  types: Species[];
  locations: (query: string) => Promise<LocationSelect[]>;
}

export default function NoticesFilters({
  search,
  categories,
  sexes,
  types,
  locations,
}: Props) {
  const { register, control } = useForm<FiltersFormValues>({
    defaultValues: {
      category: "",
      sex: "",
      species: "",
      location: null,
      notice: "",
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
      <Controller
        name="location"
        control={control}
        render={({ field }) => (
          <AsyncSelect
            {...field}
            cacheOptions
            defaultOptions
            isClearable
            loadOptions={locations}
          />
        )}
      />
      <hr />
      <div>
        <label>
          <input {...register("notice")} type="radio" value="Popular" />
          Popular
        </label>
        <label>
          <input {...register("notice")} type="radio" value="Unpopular" />
          Unpopular
        </label>
        <label>
          <input {...register("notice")} type="radio" value="Cheap" />
          Cheap
        </label>
        <label>
          <input {...register("notice")} type="radio" value="Expensive" />
          Expensive
        </label>
      </div>
    </form>
  );
}
