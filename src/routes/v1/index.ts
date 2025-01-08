import express from "express";
import guestRoute from "./guest";
import roomRoute from './room';
import reservationRoute from './reservations';

const router = express.Router();
router.use("/guests", guestRoute);
router.use("/reservations", reservationRoute)
router.use('/rooms', roomRoute)
export default router;