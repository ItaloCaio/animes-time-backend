import {IsString, IsEmail} from 'class-validator';
import { Anime } from '../../anime/interface/anime';

export class UserDto {
    @IsString()
    readonly name: string;
    @IsEmail()
    readonly email: string;
    @IsString()
    readonly password: string;
    readonly myAnimes?: Anime[];
}