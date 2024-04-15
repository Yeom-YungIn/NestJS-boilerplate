import {AfterLoad, BaseEntity} from "typeorm";
import {instanceToPlain} from "class-transformer";

export class RelationEntityHelper extends BaseEntity {
    private entity?: string;

    @AfterLoad()
    setEntityName(): void {
        this.entity = this.constructor.name;
    }

    toJSON() {
        return instanceToPlain(this);
    }
}