"use client";

import css from "./NoticesFilters.module.css";
import { Category, Sex, Species } from "@/types/notice";
import SearchField from "../SearchField/SearchField";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

interface FilterSelect {
  value: string;
  label: string;
}

interface LocationSelect {
  value: string;
  label: string;
}

interface FiltersFormValues {
  category: FilterSelect | null;
  sex: FilterSelect | null;
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
      category: null,
      sex: null,
      species: "",
      location: null,
      notice: "",
    },
  });

  const CategoriesOptions: FilterSelect[] = [
    { value: "all", label: "Show all" },
    ...categories.map((category) => ({
      value: category,
      label: category,
    })),
  ];

  const GenderOptions: FilterSelect[] = [
    { value: "all", label: "Show all" },
    ...sexes.map((sex) => ({
      value: sex,
      label: sex,
    })),
  ];

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
            <Controller
              name="category"
              control={control}
              render={({ field }) => {
                return (
                  <Select<FilterSelect, false>
                    {...field}
                    options={CategoriesOptions}
                    placeholder="Category"
                  />
                );
              }}
            />
          </label>
          <label>
            <Controller
              name="sex"
              control={control}
              render={({ field }) => {
                return (
                  <Select<FilterSelect, false>
                    {...field}
                    options={GenderOptions}
                    placeholder="By gender"
                  />
                );
              }}
            />
            {/* <select {...register("sex")} className={css.select}>
              <option value="" hidden disabled>
                By gender
              </option>
              <option value="">Show all</option>
              {sexes.map((sex) => (
                <option key={sex} value={sex}>
                  {sex}
                </option>
              ))}
            </select> */}
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
