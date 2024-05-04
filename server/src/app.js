import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import errorHandler from "./middlewares/error.middleware.js";

const app = express();

// middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(","),
    credentials: true,
  })
);

app.use(express.json({ limit: "14kb" }));
app.use(express.urlencoded({ extended: true, limit: "14kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes

// middleware for error handling
app.use(errorHandler);

export default app;
