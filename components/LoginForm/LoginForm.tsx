"use client";

import css from "./LoginForm.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

const LoginSchema = yup.object({
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email",
    )
    .required("Enter your email"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Enter your password"),
});

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
    router.push("/profile");
    reset();
  };

  return (
    <div className={css.form}>
      <p className={css.welcome}>
        Welcome! Please enter your credentials to login to the platform:
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formInputs}>
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
        </div>
        <button className={css.login} type="submit">
          Log In
        </button>
      </form>
      <p className={css.question}>
        Don’t have an account?{" "}
        <Link href="/register" className={css.link}>
          Register
        </Link>
      </p>
    </div>
  );
}
