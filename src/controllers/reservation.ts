import { createReservation, getAllReservations } from "../services/reservations"
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