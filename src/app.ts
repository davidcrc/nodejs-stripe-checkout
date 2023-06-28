import express from "express";
import dotenv from "dotenv";
import paymentRoutes from "./routes/payment.routes";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(paymentRoutes);

export default app