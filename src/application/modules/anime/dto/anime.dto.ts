import { IsInt, IsString } from 'class-validator';

export class AnimeDto {
    @IsInt()
    readonly numOfEpisode: number;
    @IsString()
    readonly description: string;
    @IsString()
    readonly category: string;
    @IsString()
    readonly name: string;
}