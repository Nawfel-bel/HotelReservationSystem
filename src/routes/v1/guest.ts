import express from "express";
import { DbClient } from "../../db";
import * as GuestsController from '../../controllers/guest'
const router = express.Router();

router.get("/guests/:id", GuestsController.GetGuest);
router.get("/guests", GuestsController.GetGuests);
router.post('/guests', GuestsController.CreateGuest)

export default router;