export interface ProductCreationDTO {
    name: string,
    tags: string[]
};

export interface ProductDB {
    name: string
};

export interface ProductSearchDTO {
    id?: number,
    name?: string,
    tags?: string
};