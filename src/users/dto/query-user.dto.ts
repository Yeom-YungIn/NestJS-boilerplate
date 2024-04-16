import {User} from "../domain/user";

export class FilterUserDto {
    roles?: number | null;
}

export class SortUserDto {
    orderBy: keyof User;
    order: string;
}