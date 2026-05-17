"use client";

import css from "./AddPetForm.module.css";
import { useForm, Controller } from "react-hook-form";
import { Sex, Species } from "@/types/notice";
import Select from "react-select";

interface AddPetFormValues {
  sex: Sex;
  imgURL: string;
  title: string;
  name: string;
  birthday: string;
  species: { value: Species; label: string };
}

const species: Species[] = [
  "dog",
  "cat",
  "monkey",
  "bird",
  "snake",
  "turtle",
  "lizard",
  "frog",
  "fish",
  "ants",
  "bees",
  "butterfly",
  "spider",
  "scorpion",
];

const speciesOptions = species.map((option) => {
  return {
    value: option,
    label: option.charAt(0).toUpperCase() + option.slice(1),
  };
});

export default function AddPetForm() {
  const { register, handleSubmit, control } = useForm<AddPetFormValues>();

  const onSubmit = (data: AddPetFormValues) => console.log(data);

  return (
    <section className={css.section}>
      <div className={css.titleContainer}>
        <h2 className={css.header}>Add my pet /</h2>
        <p className={css.subtitle}>Personal details</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={css.genderBar}>
          <legend>Pet sex</legend>
          <label className={`${css.radio} ${css.femaleRadio}`}>
            <input {...register("sex")} type="radio" value="female" />
            <svg className={css.femaleIcon} width={20} height={20}>
              <use href="/icons.svg#icon-female"></use>
            </svg>
          </label>
          <label className={`${css.radio} ${css.maleRadio}`}>
            <input {...register("sex")} type="radio" value="male" />
            <svg className={css.maleIcon} width={20} height={20}>
              <use href="/icons.svg#icon-male"></use>
            </svg>
          </label>
          <label className={`${css.radio} ${css.multipleRadio}`}>
            <input {...register("sex")} type="radio" value="multiple" />
            <svg className={css.multipleIcon} width={20} height={20}>
              <use href="/icons.svg#icon-multiple"></use>
            </svg>
          </label>
        </fieldset>
        <div className={css.defaultImage}>
          <svg className={css.icon} width={34} height={34}>
            <use href="/icons.svg#icon-cat-footprint"></use>
          </svg>
        </div>
        <div className={css.formInputs}>
          <label className={css.label}>
            <input
              {...register("imgURL")}
              type="text"
              className={css.input}
              placeholder="Enter URL"
            />
          </label>
          <label className={css.label}>
            <input
              {...register("title")}
              type="text"
              className={css.input}
              placeholder="Title"
            />
          </label>
          <label className={css.label}>
            <input
              {...register("name")}
              type="text"
              className={css.input}
              placeholder="Pet’s Name"
            />
          </label>
          <div>
            <label className={css.label}>
              <Controller
                name="species"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      {...field}
                      options={speciesOptions}
                      placeholder="Type of pet"
                      unstyled
                      isSearchable={false}
                      classNames={{
                        control: ({ menuIsOpen }) =>
                          `${css.selectControl} ${menuIsOpen ? css.dropDownArrow : ""}`,
                        menu: () => css.selectMenu,
                        menuList: () => css.selectMenuList,
                        option: () => css.selectOption,
                      }}
                    />
                  );
                }}
              />{" "}
            </label>
          </div>
        </div>
        <button type="button" className={css.backBtn}>
          Back
        </button>
      </form>
    </section>
  );
}
