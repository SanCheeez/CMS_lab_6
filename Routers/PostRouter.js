import express from 'express';
import fs from 'fs';
import { FormatPost } from '../index.js';
import { Post } from '../Models/PostModel.js';

const urlencodedParser = express.urlencoded({ extended: false });

//TODO: Написать роут для твиттов (напр. /post)
export const PostRouter = express.Router();

//TODO: Написать запрос для получения всех твиттов (пока можно хранить ввиде JSON файла или JS объекта)
PostRouter.get('/', (req, res) => {
    Post.find({}, (err, post) => {
        if (err) {
            res.send('Не удалось найти ни одного поста');
        } else {
            res.send(post);
        }
    })
    // const posts_json = fs.readFileSync('./JSON/posts.json');
    // const posts = JSON.parse(posts_json).map(FormatPost);
    // let all_posts = "";
    // for (let item of posts) {
    //     all_posts += item;
    // }
    // res.send(all_posts);
})
//TODO: Написать запрос для получения твитта по его ID
PostRouter.get('/:id', (req, res) => {
    Post.findOne({ id: req.params.id }, (err, post) => {
        if (err) {
            res.send('Пост не найден');
        } else {
            res.send(post);
        }
    })
    // const posts_json = fs.readFileSync('./JSON/posts.json');
    // const posts = JSON.parse(posts_json).filter((item) => item.id === req.params.id);
    // res.send(FormatPost(posts[0]));
})
//TODO: Написать POST запрос для отправки твитта (пока никуда записывать его не надо, нужно просто вернуть отправвленные данные назад)
PostRouter.post('/', urlencodedParser, (req, res) => {
    const newPost = Post({
        date: req.body.date,
        text: req.body.text,
        name: req.body.name,
    })
    newPost.save((err) => res.send(err));
    // const name = req.body.name;
    // const responseMessage = "Post " + name + "!";
    // res.send(responseMessage);
})