"use client";

import css from "./LoginForm.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
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
          </label>
          <label className={css.label}>
            <input
              {...register("password")}
              className={css.input}
              placeholder="Password"
              type="password"
            />
          </label>
        </div>
        <button className={css.login} type="submit">
          Log In
        </button>
      </form>
      <p className={css.question}>
        Don’t have an account? <Link href="/register">Register</Link>
      </p>
    </div>
  );
}
