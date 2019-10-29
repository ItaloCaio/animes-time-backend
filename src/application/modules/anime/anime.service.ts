import { Model } from 'mongoose'
import { Anime } from './interface/anime';
import { IAnimeService } from './port/anime.service.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AnimeService implements IAnimeService {
    constructor(@InjectModel('Anime') private readonly animeModel: Model<Anime>) { }

    async add(item: Anime): Promise<Anime> {
        const anime = new this.animeModel(item);
        return anime.save();
    }
    async getAll(): Promise<Anime[]> {
        return this.animeModel.find().exec();
    }
    async getById(id: string): Promise<Anime> {
        return this.animeModel.findOne({_id: id});
    }
    async update(id: string, item: Anime): Promise<Anime> {
        return this.animeModel.findByIdAndUpdate(id, item, {new: true});
    }
    async remove(id: string): Promise<boolean> {
        return this.animeModel.findByIdAndRemove(id);
    }
    count(): Promise<number> {
        throw new Error('Method not implemented.');
    }



}