import {Exclude, Expose} from "class-transformer";

export class User {
    id: number | string;

    @Expose({ groups: ['me', 'admin'] })
    email: string | null;

    @Exclude({ toPlainOnly: true })
    password?: string;

    @Exclude({ toPlainOnly: true })
    previousPassword?: string;

    @Expose({ groups: ['me', 'admin'] })
    provider: string;

    socialId?: string | null;

    firstName: string | null;

    lastName: string | null;

    createdAt: Date;

    updatedAt: Date;

    deletedAt: Date;
}