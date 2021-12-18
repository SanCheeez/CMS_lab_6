import express, { Request, Response, Router } from 'express';
import fs from 'fs';
import Posts from '../Models/PostModel';


//TODO: Роут для поиска
export const SearchRouter: Router = express.Router();

//TODO: Написать запрос на поиск среди твиттов (просто по совпадению куска текста)
SearchRouter.get('/', (req: Request, res: Response) => {
    Posts.find({}, (err, posts) => {
        if (err) {
            res.send('Посты не найдены');
        } else {
            const searchResponse = posts.filter((item) => item.text.includes(req.query.text.toString()));
            if (posts.length === 0) {
                res.send("<h2>Не найдено совпадений</h2>");
            } else {
                res.send(searchResponse);
            }
        }
    });
    // posts = posts.filter((item) => item.text.includes(req.params.text)).map(FormatPost);
    // if (posts.length === 0) {
    //     res.send("<h2>Не найдено совпадений</h2>");
    // } else {
    //     res.send(posts);
    // }

    // const posts_json = fs.readFileSync('./JSON/posts.json');
    // const posts = JSON.parse(posts_json).filter((item) => item.text.includes(req.params.text)).map(FormatPost);
    // if (posts.length === 0) {
    //     res.send("<h2>Не найдено совпадений</h2>");
    // } else {
    //     let all_posts = "";
    //     for (let item of posts) {
    //         all_posts += item;
    //     }
    //     res.send(all_posts);
    // }
})