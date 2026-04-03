import css from "./EditUserBtn.module.css";

export default function EditUserBtn() {
  return (
    <button className={css.button}>
      <svg className={css.icon} width={18} height={18}>
        <use href="/icons.svg#icon-edit"></use>
      </svg>
    </button>
  );
}
