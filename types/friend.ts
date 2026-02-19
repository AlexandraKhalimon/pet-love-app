export type Friend = {
  _id: string;
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  address: string;
  workDays: workDay[];
  phone: string;
  email: string;
};

export type workDay = {
  _id: string;
  isOpen: boolean;
  from?: string;
  to?: string;
};
