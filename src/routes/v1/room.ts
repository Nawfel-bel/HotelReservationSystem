import express from "express";
import * as RoomsController from '../../controllers/room'
const router = express.Router();

router.get("/", RoomsController.GetAllRooms);
router.post('/', RoomsController.CreateRoom);
router.put('/', RoomsController.UpdateRoom);

// reservations
router.get("/reservations/:id", RoomsController.GetReservationsForRoomWithId);


// room_types
router.get('/room_types', RoomsController.GetRoomTypes);

router.post('/room_types', RoomsController.CreateRoomType);
router.put('/room_types/:id', RoomsController.UpdateRoomType);


export default router;