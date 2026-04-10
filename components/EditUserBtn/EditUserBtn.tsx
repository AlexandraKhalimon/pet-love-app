"use client";

import css from "./EditUserBtn.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import ModalEditUser from "../ModalEditUser/ModalEditUser";
import { FullUser } from "@/types/user";

interface Props {
  user: FullUser;
}

export default function EditUserBtn({ user }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className={css.button}
        onClick={() => setIsModalOpen(true)}
        type="button"
      >
        <svg className={css.icon} width={18} height={18}>
          <use href="/icons.svg#icon-edit"></use>
        </svg>
      </button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ModalEditUser user={user} />
        </Modal>
      )}
    </>
  );
}
