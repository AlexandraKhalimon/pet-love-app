import type { News } from "@/types/news";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

interface FetchNewsResponse {
  results: News[];
  totalPages: number;
}

interface FetchNewsParams {
  search: string;
  page: number;
  limit: number;
}

export const fetchNews = async ({
  search,
  page,
  limit,
}: FetchNewsParams): Promise<FetchNewsResponse> => {
  const response = await axios.get<FetchNewsResponse>("/news", {
    params: {
      search,
      page,
      perPage: limit,
    },
  });
  return response.data;
};
