import express from "express";
import guestRoute from "./guest";

const router = express.Router();
router.use("/", guestRoute);

export default router;