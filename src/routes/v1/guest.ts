import express from "express";
import * as GuestsController from '../../controllers/guest'
const router = express.Router();

router.get("/guests/:id", GuestsController.GetGuestWithId); // get guest with ID
router.get("/guests", GuestsController.GetAllGuests); // get all guests
router.post('/guests', GuestsController.CreateGuest); // create guest
router.put('/guests', GuestsController.UpdateGuest)

export default router;