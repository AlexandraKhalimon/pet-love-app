"use client";

import Link from "next/link";
import css from "./RegistrationForm.module.css";
import { useForm } from "react-hook-form";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

export default function RegistrationForm() {
  const { register, handleSubmit } = useForm<RegisterFormValues>();

  const onSubmit = (data: RegisterFormValues) => console.log(data);

  return (
    <div>
      <p className={css.greeting}>
        Thank you for your interest in our platform.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
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
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
}
