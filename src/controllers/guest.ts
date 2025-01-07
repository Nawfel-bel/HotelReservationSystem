import { NextFunction, Request, Response } from "express"
import { createGuest, getGuest, getGuests } from "../services/guest"

export const GetGuests = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getGuests()
        res.status(201).json(data)
    } catch (err) {
        console.log(err)
    }
}

export const GetGuest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let guestId = req.params.id;
        let guest = await getGuest(guestId)
        res.status(200).json(guest)
    } catch (err) {
        next(err)
    }
}

export const CreateGuest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let { first_name, last_name, email } = req.body
        const guestId = await createGuest(first_name, last_name, email)
        res.status(201).json({
            message: 'added guest data',
            id: guestId
        })
    } catch (err) {
        next(err)
    }
}