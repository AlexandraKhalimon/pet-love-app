import css from "./ModalAttention.module.css";

export default function ModalAttention() {
  return (
    <>
      <div className={css.image}></div>
      <div className={css.attention}>
        <h3 className={css.title}>Attention</h3>
        <p className={css.text}>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </p>
      </div>
    </>
  );
}
