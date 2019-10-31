import { Anime } from "../../anime/interface/anime";

export class User {
    readonly id?: string;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly myAnimes?: Anime[];
}