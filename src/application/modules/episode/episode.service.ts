import { IEpisodeService } from './port/episode.service.interface';
import { Episode } from './interface/episode';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EpisodeService implements IEpisodeService {

    constructor(@InjectModel('Episode') private readonly episodeModel: Model<Episode>) {
    }

    async add(item: Episode): Promise<Episode> {
        const episode = new this.episodeModel(item);
        return await episode.save();
    }

    async getAll(): Promise<Episode[]> {
        return await this.episodeModel.find().exec();
    }
    async getById(id: string): Promise<Episode> {
        return this.episodeModel.findOne({ _id: id });
    }
    async update(id: string, item: Episode): Promise<Episode> {
        return this.episodeModel.findByIdAndUpdate(id, item, { new: true });
    }
    async remove(id: string): Promise<boolean> {
        return this.episodeModel.findByIdAndRemove(id);
    }
    count(): Promise<number> {
        throw new Error('Method not implemented.');
    }

}