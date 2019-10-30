import { IsString, IsInt, IsBoolean } from 'class-validator';

export class EpisodeDto {
    @IsString()
    readonly name: string;
    @IsInt()
    readonly num: number;
    @IsBoolean()
    readonly isDownloaded: boolean;
    @IsBoolean()
    readonly isWatched: boolean;
    @IsString()
    readonly animeId: string;
 }