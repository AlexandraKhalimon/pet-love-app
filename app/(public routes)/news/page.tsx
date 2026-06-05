import { fetchNews } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NewsClient from "./News.client";

export default async function NewsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["news", "", 1],
    queryFn: () => fetchNews({ keyword: "", page: 1, limit: 6 }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewsClient />
    </HydrationBoundary>
  );
}
