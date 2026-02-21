import css from "./FriendsItem.module.css";
import { Friend } from "@/types/friend";
import Image from "next/image";

interface Props {
  friend: Friend;
}

export default function FriendsItem({ friend }: Props) {
  const open = friend.workDays?.find((day) => day.isOpen);
  const time = open ? `${open.from} - ${open.to}` : "Day and night";

  const email = !friend.email
    ? "phone only"
    : friend.email.slice(0, 20) + "...";
  const address = !friend.address
    ? "website only"
    : friend.address.slice(0, 18) + "...";
  const phone = !friend.phone ? "email only" : friend.phone;

  return (
    <li className={css.card}>
      <p className={css.time}>{time}</p>
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
              <span className={css.point}>Email: </span>
              {friend.email ? (
                <a href={`mailto:${friend.email}`} className={css.link}>
                  {email}
                </a>
              ) : (
                <span>{email}</span>
              )}
            </li>
            <li>
              <span className={css.point}>Address: </span>
              {friend.address ? (
                <a
                  href={friend.addressUrl}
                  target="_blank"
                  className={css.link}
                >
                  {address}
                </a>
              ) : (
                <span>{address}</span>
              )}
            </li>
            <li>
              <span className={css.point}>Phone: </span>
              {friend.phone ? (
                <a href={`tel:${friend.phone}`} className={css.link}>
                  {phone}
                </a>
              ) : (
                <span>{phone}</span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
}
