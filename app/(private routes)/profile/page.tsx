"use client";

import css from "./page.module.css";
import UserCard from "@/components/UserCard/UserCard";
import { fetchUserFullInfo, setAuthHeader } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import MyNotices from "@/components/MyNotices/MyNotices";
import { useAuthStore } from "@/lib/store/authStore";
import { useEffect } from "react";

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (user?.token) {
      setAuthHeader(user.token);
    }
  }, [user]);

  const { data } = useQuery({
    queryKey: ["user", user?.token],
    queryFn: fetchUserFullInfo,
    enabled: !!user?.token,
  });

  console.log(data);
  console.log(useAuthStore.getState().user);

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
