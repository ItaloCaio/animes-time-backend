export class MyAnimes {
    readonly animeId: string;
    private _userId?: string;

    public get userId(): string {
        return this._userId;
    }
        public set userId(value: string) {
        this._userId = value;
    }
}