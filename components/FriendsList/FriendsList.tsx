import css from "./FriendsList.module.css";
import { Friend } from "@/types/friend";
import FriendsItem from "../FriendsItem/FriendsItem";

interface Props {
  friends: Friend[];
}

export default function FriendsList({ friends }: Props) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => (
        <FriendsItem friend={friend} key={friend._id} />
      ))}
    </ul>
  );
}
