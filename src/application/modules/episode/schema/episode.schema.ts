import * as mongoose from 'mongoose';

export const EpisodeSchema = new mongoose.Schema({
    name: String,
    num: Number,
    isDownloaded: Boolean,
    isWatched: Boolean,
    animeId: String,
});