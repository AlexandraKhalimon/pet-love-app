import { Friend } from "@/types/friend";
import type { News } from "@/types/news";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

interface FetchNewsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: News[];
}

interface FetchNewsParams {
  keyword: string;
  page: number;
  limit: number;
}

export const fetchNews = async ({
  keyword,
  page,
  limit,
}: FetchNewsParams): Promise<FetchNewsResponse> => {
  const response = await axios.get<FetchNewsResponse>("/news", {
    params: {
      keyword,
      page,
      limit,
    },
  });
  return response.data;
};

interface FetchFriendsResponse {
  friends: Friend[];
}

export const fetchFriends = async (): Promise<FetchFriendsResponse> => {
  const response = await axios.get<FetchFriendsResponse>("/friends/");
  return response.data;
};
