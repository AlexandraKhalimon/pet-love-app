"use client";

import css from "./NoticesFilters.module.css";
import { Category, Sex, Species } from "@/types/notice";
import SearchField from "../SearchField/SearchField";
import { Controller, useForm, useWatch } from "react-hook-form";
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
  species: FilterSelect | null;
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
  const { register, control, setValue } = useForm<FiltersFormValues>({
    defaultValues: {
      category: null,
      sex: null,
      species: null,
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

  const TypeOptions: FilterSelect[] = [
    { value: "all", label: "Show all" },
    ...types.map((type) => ({
      value: type,
      label: type,
    })),
  ];

  const noticeWatched = useWatch({
    control,
    name: "notice",
  });

  const searchIcon = () => {
    return (
      <svg width={18} height={18} className={css.searchIcon}>
        <use href="/icons.svg#icon-search"></use>
      </svg>
    );
  };

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
                    unstyled
                    isSearchable={false}
                    classNames={{
                      control: () => css.control,
                      menu: () => css.menu,
                      menuList: () => css.menuList,
                      option: ({ isSelected }) =>
                        isSelected ? css.isSelectedOption : css.option,
                    }}
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
                    unstyled
                    isSearchable={false}
                    classNames={{
                      control: () => css.control,
                      menu: () => css.menu,
                      menuList: () => css.menuList,
                      option: ({ isSelected }) =>
                        isSelected ? css.isSelectedOption : css.option,
                    }}
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
          <Controller
            name="species"
            control={control}
            render={({ field }) => {
              return (
                <Select<FilterSelect, false>
                  {...field}
                  placeholder="By type"
                  options={TypeOptions}
                  unstyled
                  isSearchable={false}
                  classNames={{
                    control: () => css.typeControl,
                    menu: () => css.typeMenu,
                    menuList: () => css.menuList,
                    option: ({ isSelected }) =>
                      isSelected ? css.isSelectedOption : css.option,
                  }}
                />
              );
            }}
          />
          {/* <select {...register("species")} className={css.select}>
            <option value="" hidden disabled>
              By type
            </option>
            <option value="">Show all</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select> */}
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
                unstyled
                classNames={{
                  control: () => css.typeControl,
                  menu: () => css.typeMenu,
                  menuList: () => css.menuList,
                  option: ({ isSelected }) =>
                    isSelected ? css.isSelectedOption : css.option,
                }}
                components={{ DropdownIndicator: searchIcon }}
              />
            );
          }}
        />
      </div>
      <hr className={css.hr} />
      <div className={css.radioButtons}>
        <label className={css.radioLabel}>
          <input
            {...register("notice")}
            type="radio"
            value="Popular"
            className={css.radio}
          />
          <span className={css.radioText}>
            Popular
            {noticeWatched === "Popular" && (
              <button
                className={css.cross}
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setValue("notice", "");
                }}
              >
                <svg width={18} height={18} className={css.icon}>
                  <use href="/icons.svg#icon-cross-small"></use>
                </svg>
              </button>
            )}
          </span>
        </label>
        <label className={css.radioLabel}>
          <input
            {...register("notice")}
            type="radio"
            value="Unpopular"
            className={css.radio}
          />
          <span className={css.radioText}>
            Unpopular
            {noticeWatched === "Unpopular" && (
              <button
                className={css.cross}
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setValue("notice", "");
                }}
              >
                <svg width={18} height={18} className={css.icon}>
                  <use href="/icons.svg#icon-cross-small"></use>
                </svg>
              </button>
            )}
          </span>
        </label>
        <label className={css.radioLabel}>
          <input
            {...register("notice")}
            type="radio"
            value="Cheap"
            className={css.radio}
          />
          <span className={css.radioText}>
            Cheap
            {noticeWatched === "Cheap" && (
              <button
                className={css.cross}
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setValue("notice", "");
                }}
              >
                <svg width={18} height={18} className={css.icon}>
                  <use href="/icons.svg#icon-cross-small"></use>
                </svg>
              </button>
            )}
          </span>
        </label>
        <label className={css.radioLabel}>
          <input
            {...register("notice")}
            type="radio"
            value="Expensive"
            className={css.radio}
          />
          <span className={css.radioText}>
            Expensive
            {noticeWatched === "Expensive" && (
              <button
                className={css.cross}
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setValue("notice", "");
                }}
              >
                <svg width={18} height={18} className={css.icon}>
                  <use href="/icons.svg#icon-cross-small"></use>
                </svg>
              </button>
            )}
          </span>
        </label>
      </div>
    </form>
  );
}
