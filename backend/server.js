const express = require("express");
const cors = require("cors"); // 👈 import cors
const db = require("./models/database");

const app = express();

// 👇 allow requests from your frontend origin
app.use(cors({
  origin: "http://localhost:5173", // your frontend's origin
  credentials: true, // optional: only if you're using cookies or auth headers
}));

app.use(express.json());

const userRouter = require("./routes/user.router");
app.use("/api/users", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
