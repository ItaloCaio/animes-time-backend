import { IComments } from './port/comments.interface';
import { Comments } from './interface/comments.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService implements IComments {

    constructor(@InjectModel('Comments') private readonly commentsModel: Model<Comments>) { }

   async add(item: Comments): Promise<Comments> {
        const comment = new this.commentsModel(item);
        return comment.save();
    }
   async getAll(): Promise<Comments[]> {
        return await this.commentsModel.find().exec();
    }

    async getAllFromEpisodeId(episodeId: string): Promise<Comments[]> {
        return await this.commentsModel.find({episodeId})
    }
    getById(id: string): Promise<Comments> {
        throw new Error('Method not implemented.');
    }
    update(id: string, item: Comments): Promise<Comments> {
        throw new Error('Method not implemented.');
    }
    remove(id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    count(): Promise<number> {
        throw new Error('Method not implemented.');
    }

}
