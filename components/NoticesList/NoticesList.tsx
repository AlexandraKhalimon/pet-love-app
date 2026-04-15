import css from "./NoticesList.module.css";
import { Notice } from "@/types/notice";
import NoticesItem from "../NoticesItem/NoticesItem";

interface Props {
  notices: Notice[];
  variant: "notices" | "favorites" | "viewed";
}

export default function NoticesList({ notices, variant }: Props) {
  return (
    <ul className={css.list}>
      {notices.map((notice) => (
        <NoticesItem notice={notice} key={notice._id} variant={variant} />
      ))}
    </ul>
  );
}
