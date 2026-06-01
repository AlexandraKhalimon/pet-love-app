import { fetchNews } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NewsClient from "./News.client";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function NewsPage() {
  await delay(10000);
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
