import { RecipeModel } from "../models/RecipeModel";
import { Database } from "./Database";

export class RecipeDatabase extends Database {
    public insertRecipe = async (recipe: RecipeModel, userId: string): Promise<void> => {
        const { getId, getTitle, getDescription, getCreationDate } = recipe;

        await this.getConnection()
        .insert({
            id: getId(),
            title: getTitle(),
            description: getDescription(),
            creation_date: getCreationDate()
        })
        .into("cookenu_recipe");

        await this.getConnection()
        .insert({
            user_id: userId,
            recipe_id: getId()
        })
        .into("cookenu_user_recipe");
    };
};