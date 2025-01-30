import express from "express";
import mongoose from "mongoose";
import userRoutes from "./Routes/userRoutes.js";
import cors from "cors";

const app = express();
const port = 3001;

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:5173",
      methods:["GET","POST","PUT","DELETE"],
      credentials: true,
    })
  );

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/users", userRoutes);

mongoose.connect("mongodb://0.0.0.0:27017/crud").then(() => {
  console.log("connected");
});

app.listen(port, () => {
  console.log(`Server running on the port ${port}`);
});
