"use client";

import css from "./NoticesFilters.module.css";
import { Category, Sex, Species } from "@/types/notice";
import SearchField from "../SearchField/SearchField";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

interface LocationSelect {
  value: string;
  label: string;
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
  locations: LocationSelect[];
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
    <form className={css.form}>
      <div className={css.filters}>
        <SearchField
          onSearch={search}
          searchClass={css.search}
          inputClass={css.input}
        />
        <div className={css.selectGroup}>
          <label>
            <select {...register("category")} className={css.select}>
              <option value="" hidden disabled className={css.option}>
                Category
              </option>
              <option value="" className={css.option}>
                Show all
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label>
            <select {...register("sex")} className={css.select}>
              <option value="" hidden disabled>
                By gender
              </option>
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
          <select {...register("species")} className={css.select}>
            <option value="" hidden disabled>
              By type
            </option>
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
          render={({ field }) => {
            if (locations.length === 0 || !locations) {
              return <Select options={[]} {...field} isClearable />;
            }
            return (
              <Select
                {...field}
                isClearable
                options={locations}
                key={locations.length}
                placeholder="Location"
                isLoading={locations.length === 0}
              />
            );
          }}
        />
      </div>
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
