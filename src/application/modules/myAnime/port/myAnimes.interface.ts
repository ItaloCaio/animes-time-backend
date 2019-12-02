import { IService } from 'src/application/domain/port/service.interface';
import { MyAnimes } from '../interface/MyAnimes';

export interface IMyAnimes extends IService<MyAnimes>{}