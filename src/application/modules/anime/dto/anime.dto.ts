import { IsInt, IsString } from 'class-validator';
import { Anime } from '../interface/anime';

export class AnimeDto {
    @IsInt()
    readonly numOfEpisode: number;
    @IsString()
    readonly description: string;
    @IsString()
    readonly category: string;
    @IsString()
    readonly name: string;
    readonly myAnimes?: Anime[];
}