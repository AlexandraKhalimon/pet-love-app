"use client";

import css from "./page.module.css";
import UserCard from "@/components/UserCard/UserCard";
import { fetchUserFullInfo } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import MyNotices from "@/components/MyNotices/MyNotices";

export default function ProfilePage() {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUserFullInfo,
  });

  console.log(data);

  return (
    <section className={css.section}>
      {data && <UserCard user={data} pets={data.pets} />}
      {data && (
        <MyNotices
          favoriteNotices={data.noticesFavorites}
          viewedNotices={data.noticesViewed}
        />
      )}
    </section>
  );
}
