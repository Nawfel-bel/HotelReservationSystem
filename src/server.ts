import express from 'express';
import { DbClient } from './db';
const app = express();
const port = 3000;

// client.connect()
//     .then(() => console.log('Connected to DB'))
//     .catch((err) => console.error('Connection error', err.stack));
app.use(express.json())
app.get('/', async (req, res) => {
    try {
        const data = await DbClient.query('SELECT * from guests')
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

app.post('/', async (req, res) => {
    let { name, age } = req.body
    try {
        await DbClient.query(`INSERT INTO guests (name, age) VALUES ($1, $2)`, [name, age])
        res.status(200).send({ message: 'added guest data' })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.get('/setup', async (req, res) => {
    try {
        await DbClient.query('CREATE TABLE guests( id SERIAL PRIMARY KEY, name VARCHAR(255), age SMALLINT CHECK (age >=0))')
        res.status(200).send({ message: 'setup complete' })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});