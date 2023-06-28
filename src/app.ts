import express from "express";
import dotenv from "dotenv";
import paymentRoutes from "./routes/payment.routes";
import path from 'path'

dotenv.config();

const app = express();

app.use(express.json());

app.use(paymentRoutes);

// leer rutas estaticas
app.use(express.static(path.resolve('src/public')))

export default app