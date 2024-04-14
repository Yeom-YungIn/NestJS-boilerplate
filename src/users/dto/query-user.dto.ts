import {User} from "../domain/user";

export class FilterUserDto {
    role?: number | null;
}

export class SortUserDto {
    orderBy: keyof User;
    order: string;
}