import express, { Request, Response, Router } from 'express';
import fs from 'fs';

//Для чтения тела POST запроса
const urlencodedParser = express.urlencoded({ extended: false });

export const HomeRouter: Router = express.Router();

HomeRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
})

HomeRouter.post('/', urlencodedParser, (req: Request, res: Response) => {
    const name = req.body.name;
    const responseMessage = "Hello " + name + "!";
    res.send(responseMessage);
})