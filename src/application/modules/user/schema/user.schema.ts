import * as mongoose from 'mongoose';
import { AnimeSchema } from '../../anime/schema/anime.schema';

export const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    myAnimes: [AnimeSchema],
    token: String,
});