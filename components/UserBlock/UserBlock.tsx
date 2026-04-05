import css from "./UserBlock.module.css";
import Image from "next/image";
import { FullUser } from "@/types/user";

interface Props {
  user: FullUser;
}

export default function UserBlock({ user }: Props) {
  const name = user.name ?? "Name";
  const email = user.email ?? "name@gmail.com";
  const phone = user.phone ?? "+380";

  return (
    <section className={css.section}>
      {user.avatar ? (
        <Image
          src={user.avatar}
          alt="Profile photo"
          width={94}
          height={94}
          className={css.avatar}
        />
      ) : (
        <div className={css.uploadContainer}>
          <div className={css.image}>
            <svg className={css.icon} width={40} height={40}>
              <use href="/icons.svg#icon-user"></use>
            </svg>
          </div>
          <button type="button" className={css.upload}>
            Upload photo
          </button>
        </div>
      )}
      <h2 className={css.heading}>My information</h2>
      <ul className={css.infoList}>
        <li className={css.infoItem}>
          <p>{name}</p>
        </li>
        <li className={css.infoItem}>
          <p>{email}</p>
        </li>
        <li className={css.infoItem}>
          <p>{phone}</p>
        </li>
      </ul>
    </section>
  );
}
