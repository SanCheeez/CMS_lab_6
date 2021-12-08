import express from 'express';
import fs from 'fs';
import { FormatPost } from '../index.js';
import { Post } from '../Models/PostModel.js';


//TODO: Роут для поиска
export const SearchRouter = express.Router();

//TODO: Написать запрос на поиск среди твиттов (просто по совпадению куска текста)
SearchRouter.get('/:text', (req, res) => {
    Post.find({}, (err, posts) => {
        if (err) {
            res.send('Посты не найдены');
        } else {
            const searchResponse = posts.filter((item) => item.text.includes(req.params.text));
            console.log(searchResponse);
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