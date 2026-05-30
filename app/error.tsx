"use client";

import css from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  const errorMessage = error?.message?.toLowerCase() || "";

  const serverProblem =
    errorMessage.includes("server components") || !errorMessage;

  const finalMessage = serverProblem
    ? "an unknown error occured on our side!"
    : errorMessage;

  return (
    <div className={css.errorPage}>
      <div className={css.error}>
        <Image
          src="/images/errors-cat.png"
          alt="Cat image"
          sizes="(max-width: 767px) 109px, (min-width: 768px) 280px"
          width={109}
          height={109}
          priority
          className={css.errorCat}
        />
        <p className={css.errorMessage}>Sorry, {finalMessage}</p>
        <div className={css.btnContainer}>
          <button type="button" onClick={reset} className={css.resetBtn}>
            Try again
          </button>
          <Link href="/home" className={css.errorLink}>
            To home page
          </Link>
        </div>
      </div>
    </div>
  );
}
