export interface Episode {
    readonly id?: string;
    readonly name: string;
    readonly num: number;
    readonly isDownloaded: boolean;
    readonly isWatched: boolean;
}