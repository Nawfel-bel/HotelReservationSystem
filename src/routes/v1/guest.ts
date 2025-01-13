import express from "express";
import * as GuestsController from '../../controllers/guest'
import { paginationMiddleware } from "../../Middleware/paginationMiddleware";
import { ReducerMiddlware, IReducerParams } from "../../Middleware/reducerMiddleware";
import { Guest, IGuest } from "../../Interfaces/guest";
const router = express.Router();


const reducerParameters: IReducerParams<Guest, 'id'> = {
    key: 'id',
    types: [{ rowKey: 'phone_number' as keyof Guest, objKey: 'phone_numbers' as keyof Guest }]
};
const reducerMiddleware = new ReducerMiddlware(reducerParameters, Guest)
router.get("/", [GuestsController.GetAllGuests, reducerMiddleware.reduce, paginationMiddleware]);

router.get("/:id", GuestsController.GetGuestWithId);
router.post('/', GuestsController.CreateGuest);
router.put('/', GuestsController.UpdateGuest)
router.delete('/:id', GuestsController.DeleteGuest)
export default router;



