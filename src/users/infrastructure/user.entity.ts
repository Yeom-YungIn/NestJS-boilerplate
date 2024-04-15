import {User} from "../domain/user";
import {RelationEntityHelper} from "../../utils/relation-entity-helper";
import {
    AfterLoad,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, Index,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Exclude, Expose} from "class-transformer";
import {AuthProvidersEnum} from "../../auth/enum/auth-providers.enum";

@Entity({ name: 'user'})
export class UserEntity extends RelationEntityHelper implements User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: String, unique: true, nullable: true})
    @Expose({groups: ['me', 'admin']})
    email: string | null;

    @Column({ nullable: true })
    @Exclude({ toPlainOnly: true })
    password?: string;

    @Exclude({ toPlainOnly: true })
    public previousPassword?: string;

    @AfterLoad()
    public loadPreviousPassword(): void {
        this.previousPassword = this.password;
    }

    @Column({ default: AuthProvidersEnum.email })
    @Expose({ groups: ['me', 'admin'] })
    provider: string;

    @Index()
    @Column({ type: String, nullable: true })
    @Expose({ groups: ['me', 'admin'] })
    socialId?: string | null;

    @Index()
    @Column({ type: String, nullable: true })
    firstName: string | null;

    @Index()
    @Column({ type: String, nullable: true })
    lastName: string | null;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}