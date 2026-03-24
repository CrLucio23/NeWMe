export const getServices = async (req, res) => {
  try {
    res.status(200).json([
      { id: 1, name: "Taglio capelli", price: 20 },
      { id: 2, name: "Barba", price: 10 },
      { id: 3, name: "Taglio + barba", price: 25 }
    ]);
  } catch (error) {
    res.status(500).json({ message: "Errore server" });
  }
};