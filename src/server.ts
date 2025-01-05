import express from 'express';
import { DbClient } from './db';
import route from './routes'
const app = express();
const port = 3000;


app.use(express.json())
app.use(route)

// temporary
app.get('/setup', async (req, res) => {
    console.log('started setup')
    try {
        await DbClient.query('CREATE TABLE guests( id SERIAL PRIMARY KEY, name VARCHAR(255), age SMALLINT CHECK (age >=0))')

        console.log("completed setup")
        res.status(200).send({ message: 'setup complete' })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

DbClient.connect()
    .then(() => console.log('Connected to DB'))
    .catch((err) => {
        console.error('Connection error', err.stack);
        process.exit(1)
    });
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});