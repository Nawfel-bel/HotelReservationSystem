import express from 'express';
// import { DbClient } from './db';
import route from './routes'
import { errorHandler } from './Middleware/errorHandling';
import cors from 'cors'

const app = express();
const port = 3000;

// const corsOptions = {
//     origin: [`*`],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// };
// app.use(cors(corsOptions))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.json())
app.use(route)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});