import css from "./ModalEditUser.module.css";
import { FullUser } from "@/types/user";
import Image from "next/image";
import { useForm } from "react-hook-form";

interface Props {
  user: FullUser;
}

interface EditUserValues {
  avatar: string;
  name: string;
  email: string;
  phone: string;
}

export default function ModalEditUser({ user }: Props) {
  const { register, handleSubmit } = useForm<EditUserValues>({
    defaultValues: {
      avatar: user.avatar || "",
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
    },
  });

  const photoBorder = user.avatar ? css.active : css.none;
  const nameBorder = user.name ? css.active : css.none;
  const emailBorder = user.email ? css.active : css.none;
  const phoneBorder = user.phone ? css.active : css.none;

  const onSubmit = (data: EditUserValues) => console.log(data);

  return (
    <div className={css.modal}>
      <h2 className={css.heading}>Edit information</h2>
      {user.avatar ? (
        <Image
          src={user.avatar}
          alt="Profile photo"
          width={80}
          height={80}
          className={css.avatar}
        />
      ) : (
        <div className={css.image}>
          <svg className={css.icon} width={40} height={40}>
            <use href="/icons.svg#icon-user"></use>
          </svg>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formInputs}>
          <label className={css.label}>
            <input
              {...register("avatar")}
              type="text"
              className={`${css.input} ${photoBorder}`}
              placeholder="Photo"
            />
          </label>
          <label className={css.label}>
            <input
              {...register("name")}
              type="text"
              className={`${css.input} ${nameBorder}`}
              placeholder="Name"
            />
          </label>
          <label className={css.label}>
            <input
              {...register("email")}
              type="email"
              className={`${css.input} ${emailBorder}`}
              placeholder="Email"
            />
          </label>
          <label className={css.label}>
            <input
              {...register("phone")}
              type="tel"
              className={`${css.input} ${phoneBorder}`}
              placeholder="Phone number"
            />
          </label>
        </div>
        <button type="submit" className={css.submit}>
          Go to profile
        </button>
      </form>
    </div>
  );
}
