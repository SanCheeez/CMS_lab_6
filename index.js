import express from 'express';
import fs from 'fs';
import { HomeRouter } from './Routers/HomeRouter.js';
import { UserRouter } from './Routers/UserRouter.js';
import { PostRouter } from './Routers/PostRouter.js';
import { ActualRouter } from './Routers/ActualRouter.js';
import { SearchRouter } from './Routers/SearchRouter.js';

const app = express();
app.use(express.json());

const PORT = '8000';

app.use('/', HomeRouter);
app.use('/user', UserRouter);
app.use('/post', PostRouter);
app.use('/actual', ActualRouter);
app.use('/search', SearchRouter);

//function makes formated post
export function FormatPost(post) {
    return `<div><h1>${post.name}</h1> <i>${post.date}</i> <p>${post.text}<p></div>`
}

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})