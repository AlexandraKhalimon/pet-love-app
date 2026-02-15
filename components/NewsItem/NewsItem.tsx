import css from "./NewsItem.module.css";
import Image from "next/image";
import { News } from "@/types/news";

interface Props {
  news: News;
}

export default function NewsItem({ news }: Props) {
  const oldDate = new Date(news.date);
  const date = new Intl.DateTimeFormat("en-GB").format(oldDate);

  const text =
    news.text.length > 95 ? news.text.slice(0, 95) + "..." : news.text;

  return (
    <div className={css.card}>
      <Image
        src={news.imgUrl}
        alt="News image"
        sizes="(max-width: 767px) 335px, (max-width: 1279px) 340px, (min-width: 1280px) 361px"
        width={335}
        height={190}
        className={css.image}
      />
      <h3 className={css.title}>{news.title}</h3>
      <p className={css.text}>{text}</p>
      <div className={css.newsInfo}>
        <p className={css.date}>{date}</p>
        <a href={news.url} target="_blank" className={css.link}>
          Read more
        </a>
      </div>
    </div>
  );
}
