import { TagDTO } from "./Tag";

export interface ProductCreationDTO {
    name: string,
    tags: Array<TagDTO>
};

export interface ProductDB {
    name: string
};