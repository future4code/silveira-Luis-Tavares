export class RecipeModel {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private creationDate: string
    ) {};

    public getId = (): string => this.id;

    public getTitle = (): string => this.title;

    public getDescription = (): string => this.description;

    public getCreationDate = (): string => this.creationDate;
};