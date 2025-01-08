import express from "express";
import * as GuestsController from '../../controllers/guest'
const router = express.Router();

router.get("/:id", GuestsController.GetGuestWithId); // get guest with ID
// GET /rooms/sorted?orderBy=reservations&direction=asc
router.get("/", GuestsController.GetAllGuests); // get all guests
router.post('/', GuestsController.CreateGuest); // create guest
router.put('/', GuestsController.UpdateGuest)

export default router;