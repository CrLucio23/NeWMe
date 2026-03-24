export function getNextDays(count = 7) {
  const days = [];

  for (let i = 0; i < count; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);

    const iso = date.toISOString().split("T")[0];
    const label = date.toLocaleDateString("it-IT", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });

    days.push({ iso, label });
  }

  return days;
}
