import { fetchFriends } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import FriendsClient from "./Friends.client";

export default async function FriendsPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["friends"],
    queryFn: () => fetchFriends(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FriendsClient />
    </HydrationBoundary>
  );
}
