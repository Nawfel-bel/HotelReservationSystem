import express from 'express';
// import { DbClient } from './db';
import route from './routes'
import { errorHandler } from './Middleware/errorHandling';
const app = express();
const port = 3000;

app.use(express.json())
app.use(route)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});