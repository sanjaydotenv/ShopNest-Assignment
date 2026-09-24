import express from "express";

// import user Routes
import userRouter from "../routes/user.routes.js"

const app = express();
app.use(express.json())

app.use("/api/auth", userRouter)

export default app;
