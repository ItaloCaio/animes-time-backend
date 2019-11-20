import { Anime } from '../../anime/interface/anime';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserRO } from '../dto/user.dto';

export class User {
    private id?: string;
    private name: string;
    private email: string;
    private password: string;
    private myAnimes?: Anime[];
    private created: Date;

    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    async comparePassword(attempt: string): Promise<boolean> {
        return await bcrypt.compare(attempt, this.password);
    }

    toResponseObject(showToken: boolean = true): UserRO {
        const { id, created, email, token } = this;
        const responseObject: UserRO = {
            id,
            created,
            email,
        };

        if (this.myAnimes) {
            responseObject.myAnimes = this.myAnimes;
        }

        if (showToken) {
            responseObject.token = token;
        }

        return responseObject;
    }

    private get token(): string {
        const { id, email } = this;

        return jwt.sign(
            {
                id,
                email,
            },
            process.env.SECRET,
            { expiresIn: '7d' },
        );
    }
}