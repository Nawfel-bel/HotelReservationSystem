import { NextFunction, Request, Response } from "express"
import { createGuest, getGuest, getGuests, updateGuest } from "../services/guest"

export const GetAllGuests = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getGuests()
        res.status(201).json(data)
    } catch (err) {
        console.log(err)
    }
}

export const GetGuestWithId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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
        let { first_name, last_name, email, phone_numbers } = req.body
        const guestId = await createGuest(first_name, last_name, email, phone_numbers)
        res.status(201).json({
            message: 'added guest data',
            id: guestId
        })
    } catch (err) {
        next(err)
    }
}

export const UpdateGuest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let { user_id, first_name, last_name, email, phone_numbers } = req.body
        const guestId = await updateGuest(user_id, first_name, last_name, email, phone_numbers)
        res.status(201).json({
            message: 'updated guest data',
            id: guestId
        })
    } catch (err) {
        next(err)
    }
}