import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import cabRoute from "./routes/cab.route.js";
import hotelRoute from "./routes/hotel.route.js";
import placeRoute from "./routes/place.route.js";

dotenv.config();

// console.log(process)

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());


// define route middleware
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/cab", cabRoute);
app.use("/api/hotel", hotelRoute);
app.use("/api/place", placeRoute);


app.listen(3000, () => {
  console.log("server is running on port 3000");
});

// define middleware for error

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});