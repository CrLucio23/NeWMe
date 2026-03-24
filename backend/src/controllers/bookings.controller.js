export const getMyBookings = async (req, res) => {
  try {
    res.status(200).json([]);
  } catch (error) {
    res.status(500).json({ message: "Errore server" });
  }
};

export const createBooking = async (req, res) => {
  try {
    res.status(201).json({ message: "Prenotazione creata" });
  } catch (error) {
    res.status(500).json({ message: "Errore server" });
  }
};