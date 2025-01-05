import express from "express";
import { DbClient } from "../../db";
const router = express.Router();

router.get("/guests", async (req, res) => {
    try {
        const data = await DbClient.query('SELECT * from guests')
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

router.post('/guests', async (req, res) => {
    let { name, age } = req.body
    try {
        await DbClient.query(`INSERT INTO guests (name, age) VALUES ($1, $2)`, [name, age])
        res.status(200).send({ message: 'added guest data' })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

export default router;