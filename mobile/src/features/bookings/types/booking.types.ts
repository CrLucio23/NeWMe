export type Service = {
  id: string;
  title: string;
  category: string;
  duration: number;
  price: number;
  image: string;
};

export type TimeSlot = {
  id: string;
  time: string;
  available: boolean;
};
