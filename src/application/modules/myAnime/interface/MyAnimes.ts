import { Anime } from 'src/application/modules/anime/interface/anime';

export class MyAnimes {
    readonly anime: Anime;
    private _userId?: string;

    public get userId(): string {
        return this._userId;
    }
        public set userId(value: string) {
        this._userId = value;
    }
}
