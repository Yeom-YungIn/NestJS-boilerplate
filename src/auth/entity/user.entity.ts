import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn
} from "typeorm";

@Entity('user')
@Unique(['userName'])
export class User{

    /** Use like this, if you want to use uuid
    @PrimaryGeneratedColumn('uuid')
    */
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @CreateDateColumn()
    issued: Date;

    @UpdateDateColumn()
    modified: Date;

    /**
     * TypeORM Relation Exam
    @OneToMany(() => Resource, Resource => Resource.user, {eager: true)
    @JoinColumn({name: 'publisher_id'})
    joinTable: joinTable[]
     * */
}