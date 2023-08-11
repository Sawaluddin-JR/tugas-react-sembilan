import express from "express";
import cors from "cors";
import foodRouter from "./router/food.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/hello", (_req, res) => {
  res.send("Hello Node.js!");
});

const router = express.Router();
router.use("/foods", foodRouter);
app.use("/api", router);

app.listen(3000, () => console.log("server berhasil dijalankan"));
