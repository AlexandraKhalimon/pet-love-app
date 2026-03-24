import css from "./ModalApproveAction.module.css";

interface Props {
  onClose: () => void;
}

export default function ModalApproveAction({ onClose }: Props) {
  return (
    <div className={css.modal}>
      <div className={css.image}>🐈</div>
      <p className={css.quastion}>Already leaving?</p>
      <div className={css.approval}>
        <button className={css.yes}>Yes</button>
        <button className={css.cancel} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
