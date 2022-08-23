import { Request, Response } from "express";

import { ParticipationBusiness } from "../business/ParticipationBusiness";

import { DeleteParticipationDTO, ParticipationDTO } from "../interfaces/Participation";

export class ParticipationController {
    constructor (
        private participationBusiness: ParticipationBusiness
    ) {};

    public create = async (req: Request, res: Response): Promise<void> => {
        try {
            const { first_name, last_name, participation } = req.body;

            const input: ParticipationDTO = {
                first_name,
                last_name,
                participation
            };

            await this.participationBusiness.createParticipation(input);

            res.status(201).send({ message: "success" });

        } catch (error: any) {
            res.status(error.message || 500).send({ error: error.message });
        }
    };

    public read = async (req: Request, res: Response): Promise<void> => {
        try {
            const participations = await this.participationBusiness.getParticipations();

            res.status(200).send({ message: participations });
            
        } catch (error: any) {
            res.status(error.message || 500).send({ error: error.message });
        }
    };

    public update = async (req: Request, res: Response): Promise<void> => {
        try {
            const { first_name, last_name, participation } = req.body;

            const input: ParticipationDTO = {
                first_name,
                last_name,
                participation
            };

            await this.participationBusiness.updateParticipation(input);

            res.status(200).send({ message: "success" });
            
        } catch (error: any) {
            res.status(error.message || 500).send({ error: error.message });
        }
    };

    public delete = async (req: Request, res: Response): Promise<void> => {
        try {
            const { first_name, last_name } = req.body;

            const input: DeleteParticipationDTO = {
                first_name,
                last_name
            };

            await this.participationBusiness.deleteParticipation(input);

            res.status(200).send({ message: "success" });

        } catch (error: any) {
            res.status(error.message || 500).send({ error: error.message });
        }
    };
};