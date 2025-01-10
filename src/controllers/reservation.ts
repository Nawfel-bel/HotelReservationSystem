import { createReservation, deleteReservation, getAllReservations } from "../services/reservations"
import { NextFunction, Request, Response } from "express"

export const GetAllReservations = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getAllReservations()
        res.status(201).json(data)
    } catch (err) {
        console.log(err)
    }
}

export const CreateReservation = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await createReservation(req.body);
        res.status(201).json(data)
    } catch (err) {
        console.log(err)
    }
}

export const DeleteReservation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let { id } = req.params
        await deleteReservation(id)
        res.status(200).json({
            message: 'updated reservation data',
        })
    } catch (err) {
        next(err)
    }
}