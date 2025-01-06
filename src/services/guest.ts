import { DbClient } from "../db"
import { ErrorResponse } from "../Middleware/errorHandling"

export const getGuests = async () => {
    try {
        const data = await DbClient.query('SELECT * from guests')
        return data.rows
    } catch (err) {
        // handle different types of errors neatly
        console.log(err)
        return []
    }
}

export const getGuest = async (id: string) => {
    try {
        const data = await DbClient.query(`SELECT * from guests WHERE id = $1`, [id])
        if (data.rowCount == 0) {
            throw new Error("guest not found")
        }
        return data.rows[0]
    } catch (err) {
        throw new ErrorResponse(`error fethcing guest with id: ${id} err: ${err}`, 500);
    }
}
