import { CustomError } from "../errors/CustomError";
import { Tag } from "../models/Tag";

export class TagDatabase {
    private static TABLE_NAME = "amaro_tags";

    public insertTags = async (tags: Tag[]) => {
        try {
            
            
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    };
};