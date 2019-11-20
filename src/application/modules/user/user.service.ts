import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { User } from './interface/user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserService } from './port/user.service.interface';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService implements IUserService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async login(user: any): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async register(item: UserDto): Promise<User> {
    const { email } = item;
    let user = await this.userModel.findOne({ email: email });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    user = await this.userModel.create(item);
    const password: string = await this.hashPassword(item);
    const newUser = new this.userModel(item);
    newUser.password = password;
    
    return newUser.save(newUser);
   }

  async add(item: User): Promise<User> {
    const newUser = new this.userModel(item);
    return await newUser.save();
  }
  async getAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  async getById(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }
  async update(id: string, item: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, item, { new: true });
  }
  async remove(id: string): Promise<boolean> {
    return this.userModel.findByIdAndRemove(id);
  }
  count(): Promise<number> {
    throw new Error('Method not implemented.');
  }

  private async hashPassword(user): Promise<string> {
    const password: string = await bcrypt.hash(user.password, 10);
    return password;
  }

  async read(username: string) {
    const user = await this.userModel.findOne({
      where: { username }
    });
    return user.toResponseObject(false);
  }
}
