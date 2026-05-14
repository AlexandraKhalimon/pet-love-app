"use client";

import css from "./AddPetForm.module.css";
import { useForm } from "react-hook-form";
import { Sex, Species } from "@/types/notice";

interface AddPetFormValues {
  sex: Sex;
  imgURL: string;
  title: string;
  name: string;
  birthday: string;
  species: Species;
}

export default function AddPetForm() {
  const { register, handleSubmit } = useForm<AddPetFormValues>();

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
          <label className={css.radio}>
            <input {...register("sex")} type="radio" value="female" />
            <svg className={css.femaleIcon} width={20} height={20}>
              <use href="/icons.svg#icon-female"></use>
            </svg>
          </label>
          <label className={css.radio}>
            <input {...register("sex")} type="radio" value="male" />
            <svg className={css.maleIcon} width={20} height={20}>
              <use href="/icons.svg#icon-male"></use>
            </svg>
          </label>
          <label className={css.radio}>
            <input {...register("sex")} type="radio" value="multiple" />
            <svg className={css.multipleIcon} width={20} height={20}>
              <use href="/icons.svg#icon-multiple"></use>
            </svg>
          </label>
        </fieldset>
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
        </div>
        <button type="button">Back</button>
      </form>
    </section>
  );
}
