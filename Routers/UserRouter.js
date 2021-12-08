import express from 'express';
import fs from 'fs';
import { User } from '../Models/UserModel.js';

export const UserRouter = express.Router();

//TODO: Возращать данные из какого-нибудь статичного JSON файла или простого JS объекта по ID пользователя и выводить на экран его никнейм.
UserRouter.get('/:name', (req, res) => {
    User.findOne({ name: req.params.name }, (err, user) => {
        if (err) {
            res.send('Пользователь не найден');
            console.log(err);
        } else {
            res.send(user);
        }
    })
    // const users_json = fs.readFileSync('./JSON/users.json');
    // const users = JSON.parse(users_json).filter((item) => item.id === req.params.id);
    // res.send('<h1>User nickname = ' + users[0].nickname + '</h1>');
})
//TODO: Написать запрос на получение всех пользователей
UserRouter.get('/', (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send('Не удалось найти ни одного пользователя');
            console.log(err);
        } else {
            res.send(user);
        }
    })
    // const users_json = fs.readFileSync('./JSON/users.json');
    // const users = JSON.parse(users_json).map(item => {
    //     return `<h1>${item.name}</h1>`;
    // });
    // let all_users = "";
    // for (let item of users) {
    //     all_users += item;
    // }
    // res.send(all_users);
})