import * as mongoose from 'mongoose';
import { EpisodeSchema } from '../../episode/schema/episode.schema';

export const DownloadedSchema = new mongoose.Schema({
    episode: EpisodeSchema,
    userId: String,
});