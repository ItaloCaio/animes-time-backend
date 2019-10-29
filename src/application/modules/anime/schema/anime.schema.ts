import * as mongoose from 'mongoose';

export const AnimeSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    numOfEpisode: Number,
});