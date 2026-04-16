import css from "./NoticesList.module.css";
import { Notice } from "@/types/notice";
import NoticesItem from "../NoticesItem/NoticesItem";

interface Props {
  notices: Notice[];
  variant: "notices" | "favorites" | "viewed";
}

export default function NoticesList({ notices, variant }: Props) {
  const listClass =
    variant === "notices" ? css.list : `${css.list} ${css.profileList}`;

  return (
    <ul className={listClass}>
      {notices.map((notice) => (
        <NoticesItem notice={notice} key={notice._id} variant={variant} />
      ))}
    </ul>
  );
}
