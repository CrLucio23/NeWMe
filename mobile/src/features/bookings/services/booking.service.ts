import { Booking } from "../types/booking";

export async function getBookings(): Promise<Booking[]> {
  return [
    {
      id: "1",
      title: "Hotel Roma Centro",
      date: "2026-04-12",
      price: 120,
      status: "confirmed",
    },
    {
      id: "2",
      title: "Appartamento Milano",
      date: "2026-05-03",
      price: 95,
      status: "pending",
    },
  ];
}
