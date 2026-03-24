import { Service, TimeSlot } from "../features/bookings/types/booking.types";

export const services: Service[] = [
  {
    id: "1",
    title: "Taglio Uomo",
    category: "Barber",
    duration: 30,
    price: 20,
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Massaggio Relax",
    category: "Wellness",
    duration: 60,
    price: 55,
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Manicure Premium",
    category: "Beauty",
    duration: 45,
    price: 35,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
  },
];

export const slotsByDay: Record<string, TimeSlot[]> = {
  "2026-03-24": [
    { id: "1", time: "09:00", available: true },
    { id: "2", time: "10:00", available: false },
    { id: "3", time: "11:00", available: true },
    { id: "4", time: "15:00", available: true },
  ],
  "2026-03-25": [
    { id: "5", time: "09:30", available: true },
    { id: "6", time: "12:00", available: true },
    { id: "7", time: "16:30", available: false },
  ],
};
