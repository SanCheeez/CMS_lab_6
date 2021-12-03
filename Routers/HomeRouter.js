import express from 'express';
import fs from 'fs';

//Для чтения тела POST запроса
const urlencodedParser = express.urlencoded({ extended: false });

export const HomeRouter = express.Router();

HomeRouter.get('/', (req, res) => {
    res.send('Hello World!');
})

HomeRouter.post('/', urlencodedParser, (req, res) => {
    const name = req.body.name;
    const responseMessage = "Hello " + name + "!";
    res.send(responseMessage);
})