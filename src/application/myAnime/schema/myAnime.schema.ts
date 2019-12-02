import * as mongoose from 'mongoose';

export const MyAnimeSchema = new mongoose.Schema({
    animeId: String,
    userId: String,
});