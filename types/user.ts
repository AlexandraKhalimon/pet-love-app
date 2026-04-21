import { Notice, Sex, Species } from "./notice";

export type User = {
  _id: string;
  name: string;
  email: string;
  token: string;
  noticesFavorites?: Notice[];
};

export type FullUser = User & {
  avatar?: string;
  phone?: string;
  noticesViewed?: Notice[];
  pets?: Pet[];
  createdAt: string;
  updatedAt?: string;
};

export type Pet = {
  _id: string;
  name: string;
  title: string;
  imgURL: string;
  species: Species;
  birthday: string;
  sex: Sex;
  createdAt: string;
  updatedAt?: string;
};

export type RegisterUser = {
  name: string;
  email: string;
  password: string;
};

export type LoginUser = {
  email: string;
  password: string;
};

export type UserEdit = {
  name?: string;
  email?: string;
  phone?: string;
  avatar?: string;
};

export type AddPet = {
  name: string;
  title: string;
  imgURL: string;
  species: Species;
  birthday: string;
  sex: Sex;
};
