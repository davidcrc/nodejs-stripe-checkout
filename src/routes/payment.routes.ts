import { Router } from "express";
import { PaymentController } from "../controllers/payment.controller";

const router = Router();

// generar una especie de orden de compra
router.post("/create-checkout-session", PaymentController.createSession);

router.get("/success", (req, res) => res.redirect("/success.html"));

router.get("/cancel", (req, res) => res.redirect("/"));

export default router;
