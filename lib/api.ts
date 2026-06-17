import { City } from "@/types/city";
import { Friend } from "@/types/friend";
import type { News } from "@/types/news";
import { Category, Notice, Sex, Species } from "@/types/notice";
import {
  AddPet,
  FullUser,
  LoginUser,
  RegisterUser,
  User,
  UserEdit,
} from "@/types/user";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

// NEWS API
// ===============================

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

// FRIENDS API
// ===============================

export const fetchFriends = async (): Promise<Friend[]> => {
  const response = await axios.get<Friend[]>("/friends/");
  return response.data;
};

// NOTICES API
// ===============================

interface FetchNoticesResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Notice[];
}

export interface FetchNoticesParams {
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

// CITIES AND LOCATIONS API
// ===============================

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

// AUTH API
// ===============================

export const registerUser = async (user: RegisterUser): Promise<User> => {
  const { data } = await axios.post<User>("/users/signup", user);
  return data;
};

export const loginUser = async (user: LoginUser): Promise<FullUser> => {
  const { data } = await axios.post<FullUser>("/users/signin", user);
  return data;
};

export const logoutUser = async (): Promise<{ message: string }> => {
  const { data } = await axios.post("/users/signout");
  return data;
};

// USER AND PET API
// ===============================

export const fetchUserInfo = async (): Promise<User> => {
  const response = await axios.get<User>("/users/current");
  return response.data;
};

export const fetchUserFullInfo = async (): Promise<FullUser> => {
  const response = await axios.get<FullUser>("/users/current/full");
  return response.data;
};

export const editUserInfo = async (data: UserEdit): Promise<FullUser> => {
  const response = await axios.patch<FullUser>("/users/current/edit", data);
  return response.data;
};

export const addPet = async (pet: AddPet): Promise<FullUser> => {
  const { data } = await axios.post<FullUser>("/users/current/pets/add", pet);
  return data;
};

export const removePet = async (petId: string): Promise<FullUser> => {
  const { data } = await axios.delete<FullUser>(
    `/users/current/pets/remove/${petId}`,
  );
  return data;
};
