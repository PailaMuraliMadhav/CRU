import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("✅ Backend is working!");
});

export default app;
