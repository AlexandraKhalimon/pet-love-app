"use client";

import { useMutation } from "@tanstack/react-query";
import css from "./ModalApproveAction.module.css";
import { logoutUser } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/authStore";

interface Props {
  onClose: () => void;
}

export default function ModalApproveAction({ onClose }: Props) {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: logoutUser,
    onSettled: () => {
      console.log("User logged out");
      onClose();
      logout();
      router.push("/home");
    },
  });

  const handleClick = () => mutate();

  return (
    <div className={css.modal}>
      <div className={css.image}>🐈</div>
      <p className={css.question}>Already leaving?</p>
      <div className={css.approval}>
        <button className={css.yes} onClick={handleClick}>
          Yes
        </button>
        <button className={css.cancel} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
