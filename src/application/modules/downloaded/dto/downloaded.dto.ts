import { Episode } from "../../episode/interface/episode";

export class DownloadedDto {
    readonly userId: string;
    readonly episode: Episode;
}