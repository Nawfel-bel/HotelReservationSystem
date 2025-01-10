import { NextFunction, Request, Response } from "express"
import { createRoom, createRoomType, deleteRoom, getRooms, getRoomsUpcomingReservations, getRoomTypes, updateRoom, updateRoomType } from "../services/rooms";

export const GetAllRooms = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getRooms({ filter: req.query.filter, offset: req.query.offset, limit: req.query.limit })
        res.status(201).json(data)
    } catch (err) {
        console.log(err)
    }
}

export const GetReservationsForRoomWithId = async (req: Request, res: Response): Promise<void> => {
    try {
        let id = req.params.id;
        const data = await getRoomsUpcomingReservations(id)
        res.status(201).json(data)
    } catch (err) {
        console.log(err)
    }
}

export const CreateRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let { room_number, room_type_id } = req.body
        const roomId = await createRoom(room_number, room_type_id)
        res.status(201).json({
            message: 'added room data',
            id: roomId
        })
    } catch (err) {
        next(err)
    }
}

export const UpdateRoom = async (req: Request, res: Response): Promise<void> => {
    try {
        let id = req.params.id;
        let { room_number, room_type_id } = req.body

        const data = await updateRoom(id, room_number, room_type_id)
        res.status(201).json(data)
    } catch (err) {
        console.log(err)
    }
}

export const DeleteRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // if there is a reservation made under this room throw an error until the reservation is deleted first
    try {
        let { id } = req.params;

        await deleteRoom(id)
        res.status(200).json({
            message: 'deleted room data',
        })
    } catch (err) {
        next(err)
    }
}

export const GetRoomTypes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data = await getRoomTypes()
        res.status(201).json(data)
    } catch (err) {
        console.log(err)
    }
}

export const CreateRoomType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let { type, price } = req.body
        const roomTypeId = await createRoomType(type, price)
        res.status(201).json({
            message: 'added room type data',
            id: roomTypeId
        })
    } catch (err) {
        next(err)
    }
}

export const UpdateRoomType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let id = req.params.id;
        let { room_type, price } = req.body
        const roomTypeId = await updateRoomType(id, room_type, price)
        res.status(201).json({
            message: 'added room type data',
            id: roomTypeId
        })
    } catch (err) {
        next(err)
    }
}

