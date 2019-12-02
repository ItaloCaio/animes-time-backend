
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IWatched } from './port/watched.interface';
import { Watched } from './interface/watched';

@Injectable()
export class WatchedService implements IWatched {

    constructor(@InjectModel('Watched') private readonly watchedModel:
    Model<Watched>) {
    }

    async add(item: Watched): Promise<Watched> {
        const myAnime = new this.watchedModel(item);
        return await myAnime.save();
    }
    async getAll(): Promise<Watched[]> {
        return await this.watchedModel.find().exec();

    }
    async getAllFromUserId(userId: string): Promise<Watched[]> {
        return await this.watchedModel.find({userId});
    }
    getById(id: string): Promise<Watched> {
        return this.watchedModel.findOne({ _id: id });
    }
    update(id: string, item: Watched): Promise<Watched> {
        return this.watchedModel.findByIdAndUpdate(id, item, { new: true });
    }
    remove(id: string): Promise<boolean> {
        return this.watchedModel.findByIdAndRemove(id);
    }
    count(): Promise<number> {
        throw new Error('Method not implemented.');
    }
}
