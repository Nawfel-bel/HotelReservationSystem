import { Request, Response } from "express"
import { DbClient } from "../db"

export const GetGuests = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await DbClient.query('SELECT * from guests')
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export const GetGuest = async (req: Request, res: Response): Promise<void> => {
    try {
        let guestId = req.params.id;
        console.log("wassabi " + guestId)
        const data = await DbClient.query(`SELECT * from guests WHERE id = $1`, [guestId])
        if (data.rowCount == 0) {
            throw new Error("Guest not found");
        }
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
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