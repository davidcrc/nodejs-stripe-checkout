import { Request, Response } from "express";
import Stripe from "stripe";
import { PORT, STRIPE_KEY } from "../const";

const stripe = new Stripe(STRIPE_KEY, { apiVersion: "2022-11-15" });

const createSession = async (req: Request, res: Response) => {
  // fake items
  const items = [
    {
      price_data: {
        product_data: {
          name: "product 1",
          description: "gaming lagtog",
        },
        currency: "usd",
        unit_amount: 20000, //centavos
      },
      quantity: 1,
    },
    {
      price_data: {
        product_data: {
          name: "product 2",
          description: "dumb TV",
        },
        currency: "usd",
        unit_amount: 50000, //centavos
      },
      quantity: 2,
    },
  ];

  const session = await stripe.checkout.sessions.create({
    line_items: items,
    mode: "payment", // depende de lo que compran
    success_url: `http://localhost:${PORT}/success`,
    cancel_url: `http://localhost:${PORT}/cancel`,
  });

  return res.json(session);
};

export const PaymentController = {
  createSession,
};
