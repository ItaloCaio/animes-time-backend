import { MyAnimes} from './interface/MyAnimes';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMyAnimes } from './port/myAnimes.interface';

@Injectable()
export class MyAnimesService implements IMyAnimes {

    constructor(@InjectModel('MyAnimes') private readonly myAnimeModel:
    Model<MyAnimes>) {
    }

    async add(item: MyAnimes): Promise<MyAnimes> {
        const myAnime = new this.myAnimeModel(item);
        return await myAnime.save();
    }
    async getAll(): Promise<MyAnimes[]> {
        return await this.myAnimeModel.find().exec();

    }
    async getAllFromUserId(userId: string): Promise<MyAnimes[]> {
        return await this.myAnimeModel.find({userId});
    }
    getById(id: string): Promise<MyAnimes> {
        return this.myAnimeModel.findOne({ _id: id });
    }
    update(id: string, item: MyAnimes): Promise<MyAnimes> {
        return this.myAnimeModel.findByIdAndUpdate(id, item, { new: true });
    }
    remove(id: string): Promise<boolean> {
        return this.myAnimeModel.findByIdAndRemove(id);
    }
    count(): Promise<number> {
        throw new Error('Method not implemented.');
    }
}
