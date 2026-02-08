import css from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <section className={css.hero}>
      <div className={css.infoWrapper}>
        <h1 className={css.title}>
          Take good <span>care</span> of your small pets
        </h1>
        <p className={css.text}>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
      <picture>
        <source media="(min-width: 1280px)" srcSet="/images/home-desktop.jpg" />
        <source media="(min-width: 768px)" srcSet="/images/home-tablet.jpg" />
        <Image
          src="/images/home-mobile.jpg"
          alt="Woman with a dog"
          width={335}
          height={402}
          sizes="(min-width: 1280px) 1280px, (min-width: 768px) 768px, 100vw"
          priority
          className={css.image}
        />
      </picture>
    </section>
  );
}
