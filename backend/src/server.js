import dotenv from "dotenv";
import app from "./app.js";
import { pool } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await pool.query("SELECT NOW()");
    console.log("✅ Database PostgreSQL connesso");

    app.listen(PORT, () => {
      console.log(`🚀 Server avviato su http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Errore avvio server:", error.message);
    process.exit(1);
  }
};

startServer();