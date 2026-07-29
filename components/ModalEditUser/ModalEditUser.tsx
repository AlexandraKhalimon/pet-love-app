import css from "./ModalEditUser.module.css";
import { FullUser } from "@/types/user";
import Image from "next/image";
import { Resolver, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthStore } from "@/lib/store/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUserInfo } from "@/lib/api";

const editSchema = yup.object({
  avatar: yup
    .string()
    .notRequired()
    .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, {
      message: "Enter a valid avatar",
      excludeEmptyString: true,
    }),
  name: yup.string().notRequired(),
  email: yup
    .string()
    .notRequired()
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, {
      message: "Enter a valid email",
      excludeEmptyString: true,
    }),
  phone: yup
    .string()
    .notRequired()
    .matches(/^\+38\d{10}$/, {
      message: "Enter a valid phone number",
      excludeEmptyString: true,
    }),
});

interface Props {
  user: FullUser;
  onClose: () => void;
}

interface EditUserValues {
  avatar?: string;
  name?: string;
  email?: string;
  phone?: string;
}

export default function ModalEditUser({ user, onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUserValues>({
    resolver: yupResolver(editSchema) as Resolver<EditUserValues>,
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

  const setUser = useAuthStore((state) => state.setUser);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: editUserInfo,
    onSuccess: (data: FullUser) => {
      console.log("User info was edited");
      setUser(data);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      onClose();
    },
  });

  const onSubmit = (data: EditUserValues) => {
    const filteredData = Object.entries(data).filter(
      ([, value]) => value !== "",
    );
    const editedData = Object.fromEntries(filteredData);

    console.log(editedData);
    mutate(editedData);
  };

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
            <p className={css.error}>{errors.avatar?.message}</p>
          </label>
          <label className={css.label}>
            <input
              {...register("name")}
              type="text"
              className={`${css.input} ${nameBorder}`}
              placeholder="Name"
            />
            <p className={css.error}>{errors.name?.message}</p>
          </label>
          <label className={css.label}>
            <input
              {...register("email")}
              type="email"
              className={`${css.input} ${emailBorder}`}
              placeholder="Email"
            />
            <p className={css.error}>{errors.email?.message}</p>
          </label>
          <label className={css.label}>
            <input
              {...register("phone")}
              type="tel"
              className={`${css.input} ${phoneBorder}`}
              placeholder="Phone number"
            />
            <p className={css.error}>{errors.phone?.message}</p>
          </label>
        </div>
        <button type="submit" className={css.submit}>
          Go to profile
        </button>
      </form>
    </div>
  );
}
