import { Router } from "express";

const router = Router();

// generar una especie de orden de compra
router.get("/create-checkout-session", (req, res) => res.send("checkout"));

router.get("/success", (req, res) => res.send("success"));

router.get("/cancel", (req, res) => res.send("cancel"));

export default router;
