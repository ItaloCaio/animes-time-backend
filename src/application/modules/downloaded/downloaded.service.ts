
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDownloaded } from './port/downloaded.interface';
import { Downloaded } from './interface/downloaded';

@Injectable()
export class DownloadedService implements IDownloaded {

    constructor(@InjectModel('Downloaded') private readonly downloadedModel:
    Model<Downloaded>) {
    }

    async add(item: Downloaded): Promise<Downloaded> {
        const myAnime = new this.downloadedModel(item);
        return await myAnime.save();
    }
    async getAll(): Promise<Downloaded[]> {
        return await this.downloadedModel.find().exec();

    }
    async getAllFromUserId(userId: string): Promise<Downloaded[]> {
        return await this.downloadedModel.find({userId});
    }
    getById(id: string): Promise<Downloaded> {
        return this.downloadedModel.findOne({ _id: id });
    }
    update(id: string, item: Downloaded): Promise<Downloaded> {
        return this.downloadedModel.findByIdAndUpdate(id, item, { new: true });
    }
    remove(id: string): Promise<boolean> {
        return this.downloadedModel.findByIdAndRemove(id);
    }
    count(): Promise<number> {
        throw new Error('Method not implemented.');
    }
}
