import { CustomError } from "../error/CustomError";

import { DeleteParticipationDTO, ParticipationDTO } from "../interfaces/Participation";
import { Participation } from "../models/Participation";

import { Database } from "./Database";

export class ParticipationDatabase extends Database {
    private static TABLE_NAME = "cubo_graph_data";

    public insertPartitipation = async (newParticipation: Participation): Promise<void> => {
        try {
            const { id, first_name, last_name, participation } = newParticipation;

            await Database.connection
            .insert({
                id,
                first_name,
                last_name,
                participation
            })
            .into(ParticipationDatabase.TABLE_NAME);
            
        } catch (error: any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message);
        }
    };

    public selectParticipations = async (): Promise<Participation[]> => {
        try {
            const result = await Database.connection
            .select()
            .from(ParticipationDatabase.TABLE_NAME);

            return result;
            
        } catch (error: any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message);
        }
    };

    public selectParticipationByName = async (first_name: string, last_name: string): Promise<Participation> => {
        try {
            const [result] = await Database.connection
            .select()
            .from(ParticipationDatabase.TABLE_NAME)
            .where({
                first_name,
                last_name
            });

            return result;

        } catch (error: any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message);
        }
    };

    public updateParticipation = async (participationId: string, participation: number): Promise<void> => {
        try {
            await Database.connection
            .update({
                participation
            })
            .from(ParticipationDatabase.TABLE_NAME)
            .where({
                id: participationId
            });

        } catch (error: any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message);
        }
    };

    public deleteParticipationById = async (id: string): Promise<void> => {
        try {
            await Database.connection
            .delete()
            .from(ParticipationDatabase.TABLE_NAME)
            .where({
                id
            });
            
        } catch (error: any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message);
        }
    };
};