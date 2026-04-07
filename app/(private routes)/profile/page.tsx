"use client";

import css from "./page.module.css";
import UserCard from "@/components/UserCard/UserCard";
import { fetchUserFullInfo } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export default function ProfilePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUserFullInfo,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Sorry, there is an error</p>;
  }

  console.log(data);

  return (
    <section className={css.section}>
      {data && <UserCard user={data} pets={data.pets} />}
    </section>
  );
}
