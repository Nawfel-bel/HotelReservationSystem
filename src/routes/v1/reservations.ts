import express from "express";
import * as ReservationsController from '../../controllers/reservation'
const router = express.Router();

// router.get("/:id", ReservationsController.GetAllReservations);

router.get("/", ReservationsController.GetAllReservations);
router.post('/', ReservationsController.CreateReservation);
router.delete('/:id', ReservationsController.DeleteReservation)

export default router;