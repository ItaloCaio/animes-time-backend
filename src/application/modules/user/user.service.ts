import { Injectable } from '@nestjs/common';
import { User } from './interface/user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserService } from './port/user.service.interface';

@Injectable()
export class UserService implements IUserService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async add(item: User): Promise<User> {
    const newUser = new this.userModel(item);
    return await newUser.save();
  }
  async getAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  async getById(id: string): Promise<User> {
    return await this.userModel.findOne({_id: id});
  }
  async update(id: string, item: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, item, {new: true});
  }
  async remove(id: string): Promise<boolean> {
    return this.userModel.findByIdAndRemove(id);
  }
  count(): Promise<number> {
    throw new Error('Method not implemented.');
  }
}
