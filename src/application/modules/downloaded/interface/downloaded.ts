import { Episode } from '../../episode/interface/episode';

export class Downloaded {
    readonly episode: Episode;
    private _userId?: string;

    public get userId(): string {
        return this._userId;
    }
        public set userId(value: string) {
        this._userId = value;
    }
}
