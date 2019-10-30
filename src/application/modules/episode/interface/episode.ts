export class Episode {
    readonly id?: string;
    readonly name: string;
    readonly num: number;
    readonly isDownloaded: boolean;
    readonly isWatched: boolean;
    private _animeId?: string;

    public get animeId(): string {
    return this._animeId;
}
    public set animeId(value: string) {
    this._animeId = value;
}
}