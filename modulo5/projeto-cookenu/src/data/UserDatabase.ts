import { UserModel } from "../models/UserModel";
import { Database } from "./Database";

export class UserDatabase extends Database {
    public insertUser = async (user: UserModel): Promise<void> => {
        const { getId, getName, getEmail, getPassword } = user;

        await this.getConnection()
        .insert({
            id: getId(),
            name: getName(),
            email: getEmail(),
            password: getPassword() 
        })
        .into("cookenu_user");
    };

    public insertFollow = async (userThatFollowsId: string, userFollowedId: string): Promise<void> => {
        // const checkFollow = await this.getConnection()
        // .select("*")
        // .from("cookenu_user_follow")
        // .whereRaw(`
        //     user_that_follows_id = ${userThatFollowsId} AND
        //     user_follower_id = ${userFollowedId}
        // `)
        // console.log(checkFollow)

        // USUÁRIO ESTÁ PODENDO SEGUIR A MESMA PESSOA MAIS DE UMA VEZ

    //     if(checkFollow === null) {
    //         await this.getConnection()
    //         .insert({
    //         user_that_follows_id: userThatFollowsId,
    //         user_followed_id: userFollowedId
    //         })
    //         .into("cookenu_user_follow");
    //     }
    };

    public selectUserByEmail = async (email: string): Promise<UserModel> => {
        const [user] = await this.getConnection()
        .select("*")
        .from("cookenu_user")
        .where({ email });

        return user && UserModel.toUserModel(user);
    };

    public selectUserById = async (id: string): Promise<UserModel> => {
        const [user] = await this.getConnection()
        .select("*")
        .from("cookenu_user")
        .where({ id });

        return user && UserModel.toUserModel(user);
    };

    public selectUserFollowsRecipes = async (followedId: string): Promise<any> => {
        const followingUsers = await this.getConnection()
        .select("followed_user_id")
        .from("cookenu_user_follow")
        .where({ follower_user_id: followedId })
        
        // const [followsRecipes] = await this.getConnection()
        // .raw(`
        //     SELECT 
        //         cookenu_recipe.id,
        //         title,
        //         description,
        //         creation_date,
        //         followed_user_id,
        //         name
        //     FROM cookenu_user_follow
        //     JOIN cookenu_user_recipe
        //     ON followed_user_id = user_id
        //     JOIN cookenu_recipe
        //     ON cookenu_recipe.id = recipe_id
        //     JOIN cookenu_user
        //     ON followed_user_id = cookenu_user.id;
        // `);

        // FEED AINDA NÃO ESTÁ FUNCIONANDO
    };
};