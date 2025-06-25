import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; // correct relative path
import app from "./app.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
