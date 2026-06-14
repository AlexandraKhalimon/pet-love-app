"use client";

import css from "./NoticesFilters.module.css";
import { Category, Sex, Species } from "@/types/notice";
import SearchField from "../SearchField/SearchField";
import { Controller, useForm, useWatch } from "react-hook-form";
import Select from "react-select";
import { useEffect } from "react";
import { FetchNoticesParams } from "@/lib/api";

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
  onFiltersChange: (filters: Partial<FetchNoticesParams>) => void;
}

export default function NoticesFilters({
  search,
  categories,
  sexes,
  types,
  locations,
  onFiltersChange,
}: Props) {
  const { register, control, setValue, reset } = useForm<FiltersFormValues>({
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

  const filtersValues = useWatch({ control });

  const mapRadioToFilters = (value: string): Partial<FetchNoticesParams> => {
    switch (value) {
      case "Cheap":
        return { byPrice: true };
      case "Expensive":
        return { byPrice: false };
      case "Unpopular":
        return { byPopularity: true };
      case "Popular":
        return { byPopularity: false };
      default:
        return { byPrice: undefined, byPopularity: undefined };
    }
  };

  useEffect(() => {
    const mappedRadioBtn = mapRadioToFilters(filtersValues.notice ?? "");

    const categoryValue = filtersValues.category?.value;
    const sexValue = filtersValues.sex?.value;
    const speciesValue = filtersValues.species?.value;

    onFiltersChange({
      category:
        categoryValue === "all" || !categoryValue
          ? undefined
          : (categoryValue as Category),
      sex: sexValue === "all" || !sexValue ? undefined : (sexValue as Sex),
      species:
        speciesValue === "all" || !speciesValue
          ? undefined
          : (speciesValue as Species),
      locationId: filtersValues.location?.value ?? undefined,
      ...mappedRadioBtn,
    });
  }, [filtersValues, onFiltersChange]);

  const resetFilters = () =>
    reset({
      category: null,
      sex: null,
      species: null,
      location: null,
      notice: "",
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
                      control: ({ menuIsOpen }) =>
                        `${css.control} ${menuIsOpen ? css.dropDownArrow : ""}`,
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
                      control: ({ menuIsOpen }) =>
                        `${css.control} ${menuIsOpen ? css.dropDownArrow : ""}`,
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
                    control: ({ menuIsOpen }) =>
                      `${css.typeControl} ${menuIsOpen ? css.dropDownArrow : ""}`,
                    menu: () => css.typeMenu,
                    menuList: () => css.menuList,
                    option: ({ isSelected }) =>
                      isSelected ? css.isSelectedOption : css.option,
                  }}
                />
              );
            }}
          />
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
                    isSelected
                      ? css.isSelectedOption
                      : `${css.option} ${css.locationOption}`,
                }}
                formatOptionLabel={(option, { inputValue }) => {
                  const capitalizedText =
                    option.label.charAt(0).toUpperCase() +
                    option.label.slice(1);

                  if (!inputValue) {
                    return capitalizedText;
                  }

                  const highlight = new RegExp(`^(${inputValue})`, "i");
                  const highlightedText = capitalizedText.split(highlight);

                  return (
                    <>
                      {highlightedText.map((text, i) =>
                        text.toLowerCase() === inputValue.toLowerCase() ? (
                          <span key={i} className={css.isSearching}>
                            {text}
                          </span>
                        ) : (
                          text
                        ),
                      )}
                    </>
                  );
                }}
                components={{ DropdownIndicator: searchIcon }}
              />
            );
          }}
        />
      </div>
      <hr className={css.hr} />
      <div className={css.radioFilters}>
        <div className={css.radioButtons}>
          <label className={css.radioLabel}>
            <input
              {...register("notice")}
              type="radio"
              value="Popular"
              className={css.radio}
              checked={noticeWatched === "Popular"}
              onChange={() => setValue("notice", "Popular")}
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
              checked={noticeWatched === "Unpopular"}
              onChange={() => setValue("notice", "Unpopular")}
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
              checked={noticeWatched === "Cheap"}
              onChange={() => setValue("notice", "Cheap")}
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
              checked={noticeWatched === "Expensive"}
              onChange={() => setValue("notice", "Expensive")}
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
        <button type="button" onClick={resetFilters} className={css.resetBtn}>
          Reset filters
        </button>
      </div>
    </form>
  );
}
