"use client";

import FriendsList from "@/components/FriendsList/FriendsList";
import { fetchFriends } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export default function FriendsClient() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["friends"],
    queryFn: fetchFriends,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Sorry, there is an error</p>;
  }

  if (data) {
    console.log(data);
  }

  return (
    <section>
      {data && data.length > 0 && <FriendsList friends={data} />}
    </section>
  );
}
