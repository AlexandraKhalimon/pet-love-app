import css from "./NoticesList.module.css";
import { Notice } from "@/types/notice";
import NoticesItem from "../NoticesItem/NoticesItem";

interface Props {
  notices: Notice[];
}

export default function NoticesList({ notices }: Props) {
  return (
    <ul className={css.list}>
      {notices.map((notice) => (
        <NoticesItem notice={notice} key={notice._id} />
      ))}
    </ul>
  );
}
