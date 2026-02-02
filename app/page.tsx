import css from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <picture>
        <source media="(min-width: 1280px)" srcSet="/images/main-desktop.jpg" />
        <source media="(min-width: 768px)" srcSet="/images/main-tablet.jpg" />
        <Image
          src="/images/main-mobile.jpg"
          alt="Dog in the vet's office"
          width={375}
          height={812}
          sizes="(min-width: 1280px) 1280px, (min-width: 768px) 768px, 100vw"
          priority
          className={css.image}
        />
      </picture>
    </>
  );
}
