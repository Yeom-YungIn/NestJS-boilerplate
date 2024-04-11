export class User {
    id: number | string;

    email: string | null;

    password: string;

    previousPassword?: string;

    provide: string;

    socialId?: string | null;

    firstName: string | null;

    lastName: string | null;

    createdAt: Date;

    updatedAt: Date;

    deletedAt: Date;
}