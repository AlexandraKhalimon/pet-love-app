import css from "./Title.module.css";

interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return <h2 className={css.title}>{title}</h2>;
}
