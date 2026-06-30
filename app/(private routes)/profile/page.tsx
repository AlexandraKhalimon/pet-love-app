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

  const pets = data?.pets || [];
  const favorite = data?.noticesFavorites || [];
  const viewed = data?.noticesViewed || [];

  return (
    <section className={css.section}>
      {data && <UserCard user={data} pets={pets} />}
      {data && <MyNotices favoriteNotices={favorite} viewedNotices={viewed} />}
    </section>
  );
}
