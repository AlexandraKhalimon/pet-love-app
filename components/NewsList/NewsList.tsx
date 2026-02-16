import css from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";
import { News } from "@/types/news";

interface Props {
  news: News[];
}

export default function NewsList({ news }: Props) {
  return (
    <ul className={css.NewsList}>
      {news.map((news) => (
        <li key={news._id}>
          <NewsItem news={news} />
        </li>
      ))}
    </ul>
  );
}
