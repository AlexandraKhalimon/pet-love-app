"use client";

import Link from "next/link";
import css from "./RegistrationForm.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const registerSchema = yup.object({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Enter your name"),
  email: yup
    .string()
    .email("Enter a valid email")
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email",
    )
    .required("Enter your email"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Enter your password"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

export default function RegistrationForm() {
  const { register, handleSubmit } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
    },
  });

  const onSubmit = (data: RegisterFormValues) => console.log(data);

  return (
    <div className={css.form}>
      <p className={css.greeting}>
        Thank you for your interest in our platform.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formInputs}>
          <input
            {...register("name")}
            className={css.input}
            placeholder="Name"
          />
          <input
            {...register("email")}
            className={css.input}
            placeholder="Email"
            type="email"
          />
          <input
            {...register("password")}
            className={css.input}
            placeholder="Password"
            type="password"
          />
          <input
            {...register("confirm")}
            className={css.input}
            placeholder="Confirm password"
            type="password"
          />
        </div>
        <button type="submit" className={css.submit}>
          Registration
        </button>
      </form>
      <p className={css.question}>
        Already have an account?
        <Link href="/login" className={css.link}>
          Login
        </Link>
      </p>
    </div>
  );
}
