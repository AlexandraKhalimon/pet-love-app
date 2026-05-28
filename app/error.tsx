"use client";

import css from "./page.module.css";
import Image from "next/image";

type Props = {
  error: Error;
};

export default function Error({ error }: Props) {
  return (
    <div className={css.errorPage}>
      <div className={css.error}>
        <Image
          src="/images/error-cat.png"
          alt="Cat image"
          sizes="(max-width: 767px) 109px, (min-width: 768px) 280px"
          width={109}
          height={109}
          priority
          className={css.errorCat}
        />
        <p className={css.errorMessage}>Sorry!{error.message}</p>
      </div>
    </div>
  );
}
