import * as mongoose from 'mongoose';
import { AnimeSchema } from '../../anime/schema/anime.schema';

export const MyAnimeSchema = new mongoose.Schema({
    anime: AnimeSchema,
    userId: String,
});