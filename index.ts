import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';
import { HomeRouter } from './Routers/HomeRouter';
import { UserRouter } from './Routers/UserRouter';
import { PostRouter } from './Routers/PostRouter';
import { ActualRouter } from './Routers/ActualRouter';
import { SearchRouter } from './Routers/SearchRouter';

const app = express();
app.use(express.json());

const PORT = '8000';

const url = 'mongodb+srv://SanCheez:Sasha3278@twitterdb.nbkoh.mongodb.net/TwitterDB?retryWrites=true&w=majority';

mongoose.connect(url, () => console.log('Mongo connected'));

app.use('/', HomeRouter);
app.use('/user', UserRouter);
app.use('/post', PostRouter);
app.use('/actual', ActualRouter);
app.use('/search', SearchRouter);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})