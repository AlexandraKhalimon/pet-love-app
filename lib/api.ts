import { City } from "@/types/city";
import { Friend } from "@/types/friend";
import type { News } from "@/types/news";
import { Category, Notice, Sex, Species } from "@/types/notice";
import { FullUser, User } from "@/types/user";
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

export const fetchUserInfo = async (): Promise<User> => {
  const response = await axios.get<User>("/users/current");
  return response.data;
};

export const fetchUserFullInfo = async (): Promise<FullUser> => {
  // const response = await axios.get<FullUser>("/users/current/full");
  // return response.data;

  //Data for testing:
  return {
    _id: "65d47cee94ee27539ccf3e28",
    name: "TestName",
    email: "tesewewewewewewet@gmail.com",
    // avatar: "https://test.png",
    phone: "+381111111111",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDQ3Y2VlOTRlZTI3NTM5Y2NmM2UyOCIsImlhdCI6MTcwODQyNTk4MiwiZXhwIjoxNzk0ODI1OTgyfQ.bqrgsPxMhe7ZfrYQWskIZzX7SfwxKprkP9wV8zRYcLs",
    noticesViewed: [
      {
        _id: "6589436d05a6bcd9b9379420",
        species: "dog",
        category: "sell",
        price: 150,
        title: "Golden Retriever Puppies",
        name: "Max",
        birthday: "2022-01-10",
        comment: "Adorable puppy looking for a loving home.",
        sex: "male",
        location: "641ffcc1ae4e889a02d25ca5",
        imgURL: "https://ftp.goit.study/img/pets/1.webp",
        createdAt: "2023-12-11T10:43:28.477Z",
        user: "6576e7d0c4cc99fc5ef94221",
        popularity: 3,
        updatedAt: "2024-02-20T10:47:23.359Z",
      },
    ],
    noticesFavorites: [
      {
        _id: "6589436d05a6bcd9b9379421",
        species: "fish",
        category: "free",
        title: "Colorful Betta Fish",
        name: "Splash",
        birthday: "2021-04-05",
        comment: "Free to a good home. Beautiful betta fish.",
        sex: "unknown",
        location: "641ffcd2ae4e889a02d28d11",
        imgURL: "https://ftp.goit.study/img/pets/3.webp",
        createdAt: "2023-12-11T10:43:28.477Z",
        user: "6576e7d0c4cc99fc5ef94221",
        popularity: 3,
        updatedAt: "2024-02-20T10:17:49.528Z",
      },
    ],
    pets: [
      {
        _id: "65d48367b3c1132894a596a3",
        name: "Lucie",
        title: "Playful family member",
        imgURL: "https://ftp.goit.study/img/pets/1.webp",
        species: "cat",
        birthday: "2020-08-09",
        sex: "female",
        createdAt: "2024-02-20T10:48:07.780Z",
        updatedAt: "2024-02-20T10:48:07.780Z",
      },
      {
        _id: "65d48314cd5396262bb01808",
        name: "Rex",
        title: "Playful family member",
        imgURL: "https://ftp.goit.study/img/pets/1.webp",
        species: "dog",
        birthday: "2020-01-01",
        sex: "male",
        createdAt: "2024-02-20T10:46:44.907Z",
        updatedAt: "2024-02-20T10:46:44.907Z",
      },
    ],
    createdAt: "2024-02-20T10:20:30.887Z",
    updatedAt: "2024-02-20T10:48:07.834Z",
  };
};
