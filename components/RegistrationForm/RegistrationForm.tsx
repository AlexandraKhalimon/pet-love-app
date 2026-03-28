"use client";

import css from "./RegistrationForm.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
    },
  });

  const router = useRouter();

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
    router.push("/profile");
    reset();

    return;
  };

  return (
    <div className={css.form}>
      <p className={css.greeting}>
        Thank you for your interest in our platform.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formInputs}>
          <label className={css.label}>
            <input
              {...register("name")}
              className={css.input}
              placeholder="Name"
            />
            <p className={css.error}>{errors.name?.message}</p>
          </label>
          <label className={css.label}>
            <input
              {...register("email")}
              className={css.input}
              placeholder="Email"
              type="email"
            />
            <p className={css.error}>{errors.email?.message}</p>
          </label>
          <label className={css.label}>
            <input
              {...register("password")}
              className={css.input}
              placeholder="Password"
              type="password"
            />
            <p className={css.error}>{errors.password?.message}</p>
          </label>
          <label className={css.label}>
            <input
              {...register("confirm")}
              className={css.input}
              placeholder="Confirm password"
              type="password"
            />
            <p className={css.error}>{errors.confirm?.message}</p>
          </label>
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
