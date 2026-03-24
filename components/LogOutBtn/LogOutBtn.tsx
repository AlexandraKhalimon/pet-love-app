import css from "./LogOutBtn.module.css";

interface Props {
  className?: string;
}

export default function LogOutBtn({ className }: Props) {
  return <button className={`${css.button} ${className}`}>Log out</button>;
}
