import {UserEntity} from "./user.entity";
import {User} from "../domain/user";

export class UserMapper {
    static toDomain(raw: UserEntity): User {
        const user = new User();
        user.id = raw.id;
        user.email = raw.email;
        user.password = raw.password;
        user.previousPassword = raw.previousPassword;
        user.provider = raw.provider;
        user.socialId = raw.socialId;
        user.firstName = raw.firstName;
        user.lastName = raw.lastName;
        user.createdAt = raw.createdAt;
        user.updatedAt = raw.updatedAt;
        user.deletedAt = raw.deletedAt;
        return user;
    }

    static toPersistence(user: User): UserEntity {
        const userEntity = new UserEntity();
        if (user.id && typeof user.id === 'number') {
            userEntity.id = user.id;
            userEntity.email = user.email;
            userEntity.password = user.password;
            userEntity.previousPassword = user.previousPassword;
            userEntity.provider = user.provider;
            userEntity.socialId = user.socialId;
            userEntity.firstName = user.firstName;
            userEntity.lastName = user.lastName;
            userEntity.createdAt = user.createdAt;
            userEntity.updatedAt = user.updatedAt;
            userEntity.deletedAt = user.deletedAt;
            return userEntity;
        }
    }
}