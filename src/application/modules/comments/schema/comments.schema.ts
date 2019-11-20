import * as mongoose from 'mongoose';

export const CommentsSchema = new mongoose.Schema({
    userId: String,
    comment: String,
    episodeId: String,
});