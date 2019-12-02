import { Episode } from "../../episode/interface/episode";

export class WatchedDto {
    readonly userId: string;
    readonly episode: Episode;
}