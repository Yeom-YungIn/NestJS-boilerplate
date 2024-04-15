import { User } from "../domain/user";
import {NullableType} from "../../utils/types/nullable.type";
import {EntityConditionType} from "../../utils/types/entity-condition.type";
import {FilterUserDto, SortUserDto} from "../dto/query-user.dto";
import {IPaginationOptions} from "../../utils/types/pagenation-options";
import {DeepPartialType} from "../../utils/types/deep-partial.type";

export abstract class UserRepositoryAbs {
    abstract create(
        data: Omit<User, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>,
    ): Promise<User>;

    abstract findManyWithPagination(
        { filterOptions, sortOptions, paginationOptions,}: { filterOptions?: FilterUserDto | null; sortOptions?: SortUserDto[] | null; paginationOptions: IPaginationOptions;}
    ): Promise<User[]>;

    abstract findOne(fields: EntityConditionType<User>): Promise<NullableType<User>>;

    abstract update(
        id: User['id'],
        payload: DeepPartialType<User | null>
    );

    abstract softDelete(id: User['id']): Promise<void>;
}
