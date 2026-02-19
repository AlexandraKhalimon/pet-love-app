import css from "./FriendsItem.module.css";
import { Friend } from "@/types/friend";
import Image from "next/image";

interface Props {
  friend: Friend;
}

export default function FriendsItem({ friend }: Props) {
  return (
    <li className={css.card}>
      <p className={css.time}>Time</p>
      <div className={css.information}>
        <Image
          src={friend.imageUrl}
          alt="Company logo"
          width={80}
          height={80}
          loading="lazy"
          className={css.image}
        />
        <div className={css.contacts}>
          <h3 className={css.title}>{friend.title}</h3>
          <ul className={css.list}>
            <li>
              <span>Email:</span> {friend.email}
            </li>
            <li>
              <span>Address: </span> {friend.address}
            </li>
            <li>
              <span>Phone: </span> {friend.phone}
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
}
