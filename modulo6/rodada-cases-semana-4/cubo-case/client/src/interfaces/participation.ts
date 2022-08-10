export interface Participation {
    id: string,
    first_name: string,
    last_name: string,
    participation: number;
};

export interface CreateParticipation {
    first_name: string,
    last_name: string,
    participation: number;
};

export interface UpdateParticipation extends CreateParticipation {};

export interface DeleteParticipation {
    first_name: string,
    last_name: string
};