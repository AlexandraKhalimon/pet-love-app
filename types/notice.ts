export type Notice = {
  _id: string;
  species: Species;
  category: Category;
  price?: number;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: Sex;
  location: string;
  imgURL: string;
  createdAt: string;
  user: string;
  popularity: number;
  updatedAt?: string;
};

export type Species =
  | "dog"
  | "cat"
  | "monkey"
  | "bird"
  | "snake"
  | "turtle"
  | "lizard"
  | "frog"
  | "fish"
  | "ants"
  | "bees"
  | "butterfly"
  | "spider"
  | "scorpion";

export type Category = "found" | "free" | "lost" | "sell";
export type Sex = "female" | "male" | "multiple" | "unknown";
