import css from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={css.errorPage}>
      <div className={css.notFound}>
        <div className={css.errorContainer}>
          <p className={css.errorNumber}>4</p>
          <Image
            src="/images/error-cat.png"
            alt="Cat image"
            width={109}
            height={109}
            priority
            className={css.errorCat}
          />
          <p className={css.errorNumber}>4</p>
        </div>
        <p className={css.errorMessage}>Ooops! This page was not found :(</p>
        <Link href="/home" className={css.errorLink}>
          To home page
        </Link>
      </div>
    </div>
  );
}
