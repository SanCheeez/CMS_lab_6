import express, { Request, Response, Router } from 'express';
import fs from 'fs';
import Actual from '../Models/ActualModel'

//TODO: Роут для актуального
export const ActualRouter: Router = express.Router();

//TODO: Написать запрос на получение списка актуального
ActualRouter.get('/', (req: Request, res: Response) => {
    Actual.find({}, (err, actual) => {
        if (err) {
            res.send('Нет актуальных новостей');
        } else {
            res.send(actual);
        }
    })
    // const actual_json = fs.readFileSync('./JSON/actual.json');
    // const actuals = JSON.parse(actual_json).map((item) => {
    //     return `<div><i>${item.theme}</i> <h2   >${item.title}</h2> <p>Твиты: ${item.tweets}<p><hr></div>`;
    // });
    // let all_actuals = "";
    // for (let item of actuals) {
    //     all_actuals += item;
    // }
    // res.send(all_actuals);
})