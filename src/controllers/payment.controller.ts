import { Request, Response } from "express";
import Stripe from "stripe";
import { PORT, STRIPE_KEY } from "../const";
import { createProducts } from "../seeds/products.seed";
import { randomNumber } from "../utils";

const stripe = new Stripe(STRIPE_KEY, { apiVersion: "2022-11-15" });

const createSession = async (req: Request, res: Response) => {
  const getProducts = createProducts(randomNumber(1,5))
  
  // fake items
  const items = getProducts.map((product) => {
    return {
      price_data: {
        product_data: {
          name: product.name,
          description: product.description,
        },
        currency: "usd",
        unit_amount: product.price, //centavos
      },
      quantity: randomNumber(1,5),
    }
  })

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
