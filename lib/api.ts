import { City } from "@/types/city";
import { Friend } from "@/types/friend";
import type { News } from "@/types/news";
import { Category, Notice, Sex, Species } from "@/types/notice";
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

export const fetchFriends = async (): Promise<Friend[]> => {
  const response = await axios.get<Friend[]>("/friends/");
  return response.data;
};

interface FetchNoticesResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Notice[];
}

interface FetchNoticesParams {
  keyword?: string;
  category?: Category;
  species?: Species;
  locationId?: string;
  byDate?: boolean;
  byPrice?: boolean;
  byPopularity?: boolean;
  page: number;
  limit: number;
  sex?: Sex;
}

export const fetchNotices = async ({
  keyword,
  category,
  species,
  locationId,
  byDate,
  byPrice,
  byPopularity,
  page,
  limit,
  sex,
}: FetchNoticesParams): Promise<FetchNoticesResponse> => {
  const response = await axios.get<FetchNoticesResponse>("/notices", {
    params: {
      keyword,
      category,
      species,
      locationId,
      byDate,
      byPrice,
      byPopularity,
      page,
      limit,
      sex,
    },
  });
  return response.data;
};

export const fetchNoticeCategories = async (): Promise<Category[]> => {
  const response = await axios.get<Category[]>("/notices/categories");
  return response.data;
};

export const fetchNoticeSex = async (): Promise<Sex[]> => {
  const response = await axios.get<Sex[]>("/notices/sex");
  return response.data;
};

export const fetchNoticeSpecies = async (): Promise<Species[]> => {
  const response = await axios.get<Species[]>("/notices/species");
  return response.data;
};

interface FetchCitiesParams {
  keyword: string;
}

export const fetchCities = async ({
  keyword,
}: FetchCitiesParams): Promise<City[]> => {
  const response = await axios.get<City[]>("/cities/", {
    params: {
      keyword,
    },
  });
  return response.data;
};

export const fetchLocations = async (): Promise<City[]> => {
  const response = await axios.get<City[]>("/cities/locations");
  return response.data;
};
