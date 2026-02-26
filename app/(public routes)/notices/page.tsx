import {
  fetchNoticeCategories,
  fetchNotices,
  fetchNoticeSex,
  fetchNoticeSpecies,
} from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NoticesClient from "./Notices.client";

export default async function NoticesPage() {
  const queryClient = new QueryClient();

  const getNotices = () => {
    queryClient.prefetchQuery({
      queryKey: ["notices", 1, 6],
      queryFn: () =>
        fetchNotices({
          page: 1,
          limit: 6,
        }),
    });
  };

  const getCategories = () => {
    queryClient.prefetchQuery({
      queryKey: ["categories"],
      queryFn: fetchNoticeCategories,
    });
  };

  const getSexes = () => {
    queryClient.prefetchQuery({
      queryKey: ["sexes"],
      queryFn: fetchNoticeSex,
    });
  };

  const getTypes = () => {
    queryClient.prefetchQuery({
      queryKey: ["types"],
      queryFn: fetchNoticeSpecies,
    });
  };

  await Promise.all([getNotices(), getCategories(), getSexes(), getTypes()]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoticesClient />
    </HydrationBoundary>
  );
}
