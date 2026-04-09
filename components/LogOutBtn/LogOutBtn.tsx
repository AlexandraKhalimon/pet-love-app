"use client";

import css from "./LogOutBtn.module.css";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";
import Modal from "../Modal/Modal";
import { useState } from "react";

interface Props {
  className: string;
}

export default function LogOutBtn({ className }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className={`${css.button} ${className}`}
        onClick={() => setIsModalOpen(true)}
        type="button"
      >
        Log out
      </button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ModalApproveAction onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
}
