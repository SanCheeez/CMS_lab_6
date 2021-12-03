import express from 'express';
import fs from 'fs';

//TODO: Роут для актуального
export const ActualRouter = express.Router();

//TODO: Написать запрос на получение списка актуального
ActualRouter.get('/', (req, res) => {
    const actual_json = fs.readFileSync('./JSON/actual.json');
    const actuals = JSON.parse(actual_json).map((item) => {
        return `<div><i>${item.theme}</i> <h2   >${item.title}</h2> <p>Твиты: ${item.tweets}<p><hr></div>`;
    });
    let all_actuals = "";
    for (let item of actuals) {
        all_actuals += item;
    }
    res.send(all_actuals);
})