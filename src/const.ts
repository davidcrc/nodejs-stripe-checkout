import {config} from "dotenv";
config()

export const PORT = process.env.PORT || 3000;
export const STRIPE_KEY = process.env.STRIPE_SECRET_KEY || '';
