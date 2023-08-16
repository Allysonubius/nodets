import express, { Request, Response, Router }  from "express";
import cors from 'cors';

import routes from './routes/index'

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

const port = 3000;

app.listen(port, () => {
    console.log("Aplicação online na porta: "+port);
});