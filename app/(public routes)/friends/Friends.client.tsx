"use client";

import css from "./page.module.css";
import FriendsList from "@/components/FriendsList/FriendsList";
import Title from "@/components/Title/Title";
import { fetchFriends } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export default function FriendsClient() {
  const { data } = useQuery({
    queryKey: ["friends"],
    queryFn: fetchFriends,
  });

  return (
    <section className={css.section}>
      <Title title={"Our friends"} />
      {data && data.length > 0 && <FriendsList friends={data} />}
    </section>
  );
}
