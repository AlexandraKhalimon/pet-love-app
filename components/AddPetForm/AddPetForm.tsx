"use client";

import css from "./AddPetForm.module.css";
import { useForm, Controller, useWatch } from "react-hook-form";
import { Sex, Species } from "@/types/notice";
import Select from "react-select";
import DatePicker from "react-datepicker";
// @ts-expect-error side-effect CSS import from node_modules is not recognized by TS
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

interface AddPetFormValues {
  sex: Sex;
  imgURL: string;
  title: string;
  name: string;
  birthday: Date;
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

const addPetSchema = yup.object({
  sex: yup
    .mixed<Sex>()
    .oneOf(["female", "male", "multiple"])
    .required("Choose pet gender"),
  imgURL: yup
    .string()
    .trim()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      "Enter a valid image URL(png,jpg,jpeg,gif,bmp,webp)",
    )
    .required("Enter a valid image"),
  title: yup.string().trim().required("Enter a valid title"),
  name: yup.string().trim().required("Enter the pet name"),
  birthday: yup.date().required("Choose pet birthdate"),
  species: yup
    .object({
      value: yup.mixed<Species>().oneOf(species).required(),
      label: yup.string().required(),
    })
    .required("Choose pet type"),
});

export default function AddPetForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<AddPetFormValues>({
    resolver: yupResolver(addPetSchema),
    mode: "onChange",
    defaultValues: {
      sex: undefined,
      imgURL: "",
      title: "",
      name: "",
      birthday: undefined,
      species: undefined,
    },
  });

  const petImage = useWatch({
    control,
    name: "imgURL",
  });

  const values = useWatch({
    control,
  });

  const inputClassController = (value: unknown, baseClass: string) =>
    `${baseClass} ${value ? css.active : css.none}`;

  const btnWrapper = `${css.btnWrapper} ${!isValid ? css.oneBtnWrapper : ""}`;

  const router = useRouter();

  const backRouter = () => router.push("/profile");

  const onSubmit = (data: AddPetFormValues) => {
    const formatedData = {
      sex: data.sex,
      imgURL: data.imgURL.trim(),
      title: data.title.trim(),
      name: data.name.trim(),
      birthday: data.birthday.toLocaleDateString("en-CA"),
      species: data.species.value,
    };
    console.log(formatedData);
    router.push("/profile");
  };

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
          <p className={css.error}>{errors.sex?.message}</p>
        </fieldset>
        {petImage ? (
          <Image
            src={petImage}
            alt="Pet image"
            sizes="(max-width: 767px) 68px, (min-width: 768px) 86px"
            width={68}
            height={68}
            className={css.petImage}
          />
        ) : (
          <div className={css.defaultImage}>
            <svg className={css.icon} width={34} height={34}>
              <use href="/icons.svg#icon-cat-footprint"></use>
            </svg>
          </div>
        )}
        <div className={css.formInputs}>
          <label className={css.label}>
            <input
              {...register("imgURL")}
              type="text"
              className={inputClassController(values.imgURL?.trim(), css.input)}
              placeholder="Enter URL"
            />
            <p className={css.error}>{errors.imgURL?.message}</p>
          </label>
          <label className={css.label}>
            <input
              {...register("title")}
              type="text"
              className={inputClassController(values.title?.trim(), css.input)}
              placeholder="Title"
            />
            <p className={css.error}>{errors.title?.message}</p>
          </label>
          <label className={css.label}>
            <input
              {...register("name")}
              type="text"
              className={inputClassController(values.name?.trim(), css.input)}
              placeholder="Pet’s Name"
            />
            <p className={css.error}>{errors.name?.message}</p>
          </label>
          <div className={css.selectWrapper}>
            <label className={css.label}>
              <Controller
                name="birthday"
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <DatePicker
                      selected={value ? new Date(value) : null}
                      onChange={(date: Date | null) => onChange(date)}
                      placeholderText="00.00.0000"
                      dateFormat="dd.MM.yyyy"
                      className={inputClassController(
                        values.birthday,
                        css.selectControl,
                      )}
                      popperClassName={css.customPopper}
                    />
                  );
                }}
              />
              <p className={css.error}>{errors.birthday?.message}</p>
            </label>
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
                          `${inputClassController(
                            values.species,
                            css.selectControl,
                          )} ${menuIsOpen ? css.dropDownArrow : ""}`,
                        placeholder: () => css.selectPlaceholder,
                        menu: () => css.selectMenu,
                        menuList: () => css.selectMenuList,
                        option: () => css.selectOption,
                      }}
                    />
                  );
                }}
              />{" "}
              <p className={css.error}>{errors.species?.message}</p>
            </label>
          </div>
        </div>
        <div className={btnWrapper}>
          <button type="button" className={css.backBtn} onClick={backRouter}>
            Back
          </button>
          {isValid && (
            <button type="submit" className={css.submitBtn}>
              Submit
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
