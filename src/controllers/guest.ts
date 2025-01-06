import { NextFunction, Request, Response } from "express"
import { DbClient } from "../db"
import { getGuest } from "../services/guest"

export const GetGuests = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await DbClient.query('SELECT * from guests')
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export const GetGuest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let guestId = req.params.id;
    try {
        let guest = await getGuest(guestId)
        res.status(200).json(guest)
    } catch (err) {
        next(err)
    }
}

export const CreateGuest = async (req: Request, res: Response): Promise<void> => {
    let { name, age } = req.body
    try {
        await DbClient.query(`INSERT INTO guests (name, age) VALUES ($1, $2)`, [name, age])
        res.status(200).send({ message: 'added guest data' })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}