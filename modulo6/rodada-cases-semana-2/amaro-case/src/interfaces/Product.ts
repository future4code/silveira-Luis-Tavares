import { Tag } from "../models/Tag";

export interface ProductCreationDTO {
    name: string,
    tags: Array<Tag>
};