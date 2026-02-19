import { Friend } from "@/types/friend";
import FriendsItem from "../FriendsItem/FriendsItem";

interface Props {
  friends: Friend[];
}

export default function FriendsList({ friends }: Props) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendsItem friend={friend} key={friend._id} />
      ))}
    </ul>
  );
}
