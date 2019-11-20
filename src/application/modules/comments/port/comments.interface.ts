import { IService } from 'src/application/domain/port/service.interface';
import { Comments } from '../interface/comments.interface';

export interface IComments extends IService<Comments> {
} 