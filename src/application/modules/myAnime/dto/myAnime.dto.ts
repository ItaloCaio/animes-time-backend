import { Anime } from 'src/application/modules/anime/interface/anime';

export class MyAnimesDto {

    readonly anime: Anime;
    readonly userId: string;
}
