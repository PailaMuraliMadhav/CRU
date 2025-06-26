// src/server.js
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import app from './app.js';     // ← one and only import of `app`

dotenv.config();
connectDB();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
