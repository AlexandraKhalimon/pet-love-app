import css from "./UserBlock.module.css";
import Image from "next/image";
import { FullUser } from "@/types/user";

interface Props {
  user: FullUser;
}

export default function UserBlock({ user }: Props) {
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
    </section>
  );
}
