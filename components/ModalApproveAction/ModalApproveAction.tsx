import css from "./ModalApproveAction.module.css";

export default function ModalApproveAction() {
  return (
    <div className={css.modal}>
      <div className={css.image}>🐈</div>
      <p className={css.quastion}>Already leaving?</p>
      <div className={css.approval}>
        <button className={css.yes}>Yes</button>
        <button className={css.cancel}>Cancel</button>
      </div>
    </div>
  );
}
