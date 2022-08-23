import { ParticipationDatabase } from "../data/ParticipationDatabase";

import { CustomError } from "../error/CustomError";

import { DeleteParticipationDTO, ParticipationDTO } from "../interfaces/Participation";
import { Participation } from "../models/Participation";

import { IdGenerator } from "../services/IdGenerator";

export class ParticipationBusiness {
    constructor (
        private idGenerator: IdGenerator,
        private participationDatabase: ParticipationDatabase
    ) {};

    public createParticipation = async (output: ParticipationDTO): Promise<void> => {
        const { first_name, last_name, participation } = output;

        if (!first_name) {
            throw new CustomError(400, "Primeiro nome inválido");
        };

        if (!last_name) {
            throw new CustomError(400, "Sobrenome inválido");
        };

        if (!participation || participation <= 0) {
            throw new CustomError(400, "Valor de participação inválida");
        };

        const id: string = this.idGenerator.generateId();

        const newParticipation = new Participation(
            id,
            first_name,
            last_name,
            participation
        );

        await this.participationDatabase.insertPartitipation(newParticipation);        
    };

    public getParticipations = async (): Promise<Participation[]> => {
        return await this.participationDatabase.selectParticipations();
    };

    public updateParticipation = async (output: ParticipationDTO): Promise<void> => {
        const { first_name, last_name, participation } = output;

        if (!first_name || !last_name) {
            throw new CustomError(404, "Nome ou sobrenome inválidos");
        }

        if (!participation) {
            throw new CustomError(400, "Valor de participação inválido");
        }

        const selectedPart = await this.participationDatabase.selectParticipationByName(first_name, last_name);

        if (!selectedPart) {
            throw new CustomError(404, "Participação não encontrada");
        }

        await this.participationDatabase.updateParticipation(selectedPart.id, participation);
    };

    public deleteParticipation = async (output: DeleteParticipationDTO): Promise<void> => {
        const { first_name, last_name } = output;


        if (!first_name || !last_name) {
            throw new CustomError(400, "Nome ou sobrenome inválidos");
        }

        const selectedPart = await this.participationDatabase.selectParticipationByName(first_name, last_name);

        if (!selectedPart) {
            throw new CustomError(404, "Participação não encontrada");
        }

        await this.participationDatabase.deleteParticipationById(selectedPart.id);
    };
};