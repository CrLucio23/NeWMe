export type Booking = {
  id: string;
  title: string;
  date: string;
  price: number;
  status: "pending" | "confirmed" | "cancelled";
};
