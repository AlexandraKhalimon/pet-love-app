import css from "./UserBlock.module.css";
import Image from "next/image";
import { FullUser } from "@/types/user";
import { useState } from "react";
import Modal from "../Modal/Modal";
import ModalEditUser from "../ModalEditUser/ModalEditUser";

interface Props {
  user: FullUser;
}

export default function UserBlock({ user }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const name = user.name ?? "Name";
  const email = user.email ?? "name@gmail.com";
  const phone = user.phone ?? "+380";

  const nameStyle = user.name ? css.active : css.none;
  const emailStyle = user.email ? css.active : css.none;
  const phoneStyle = user.phone ? css.active : css.none;

  return (
    <section className={css.section}>
      {user.avatar ? (
        <Image
          src={user.avatar}
          alt="Profile photo"
          sizes="(max-width: 767px) 94px, (min-width: 768px) 110px"
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
          <button
            type="button"
            className={css.upload}
            onClick={() => setIsModalOpen(true)}
          >
            Upload photo
          </button>
        </div>
      )}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ModalEditUser user={user} />
        </Modal>
      )}
      <h2 className={css.heading}>My information</h2>
      <ul className={css.infoList}>
        <li className={`${css.infoItem} ${nameStyle}`}>
          <p>{name}</p>
        </li>
        <li className={`${css.infoItem} ${emailStyle}`}>
          <p>{email}</p>
        </li>
        <li className={`${css.infoItem} ${phoneStyle}`}>
          <p>{phone}</p>
        </li>
      </ul>
    </section>
  );
}
