export class EpisodeModel {
    private _id?: string;
    private _name?: string;
    private _num: number;
    private _isDownloaded: boolean;
    private _isWatched: boolean;
    private _animeId: string;
   
    public get animeId(): string {
        return this._animeId;
    }
    public set animeId(value: string) {
        this._animeId = value;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
}