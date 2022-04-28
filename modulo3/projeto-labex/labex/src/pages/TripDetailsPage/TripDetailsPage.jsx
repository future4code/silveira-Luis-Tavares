import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/requests";
import { useProtectedData } from "../../hooks/useProtectedData";
import { useRequestData } from "../../hooks/useRequestData";

export function TripDetailsPage() {
    useProtectedData();
    const params = useParams();
    const tripDetails = useRequestData(`${BASE_URL}/trip/${params.id}`);

    return (
        <div>
            {tripDetails && (<>

            <div>
                <h3>{tripDetails.trip.name}</h3>
                <p><strong>Planeta:</strong> {tripDetails.trip.planet}</p>
                <p><strong>Descrição:</strong> {tripDetails.trip.description}</p>
                <p><strong>Duração:</strong> {tripDetails.trip.durationInDays} dias</p>
                <p><strong>Data de ínicio:</strong> {tripDetails.trip.date}</p>
            </div>

            <div>
                <h3>Candidatos Pendentes</h3>
                
                {tripDetails.trip.candidates.map((candidate) => {
                    return (
                        <div key={candidate.name}>
                            <div>
                                <h4>{candidate.name}</h4>
                                <p>Idade: {candidate.age}</p>
                                <p>Profissão: {candidate.profession}</p>
                                <p>Texto de aplicação: {candidate.applicationText}</p>
                                <p>País de origem: {candidate.country}</p>
                            </div>

                            <div>
                                <button>Aprovar</button>
                                <button>Reprovar</button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div>
                <h3>Candidatos Aprovados</h3>

                <ul>
                    {tripDetails.trip.approved.map((person) => {
                        <li key={person.name}>{person.name}</li>
                    })}
                </ul>
            </div>

            </>)}

            <button>Voltar para o Painel Administrativo</button>
        </div>
    );
};