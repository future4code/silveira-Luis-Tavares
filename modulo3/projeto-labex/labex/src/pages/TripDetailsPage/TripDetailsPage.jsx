import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/requests";
import { useProtectedData } from "../../hooks/useProtectedData";
import { useRequestData } from "../../hooks/useRequestData";
import { goBack } from "../../routes/coordinator";

export function TripDetailsPage() {
    useProtectedData();
    const navigate = useNavigate();
    const params = useParams();
    const [tripDetails, getTripDetails] = useRequestData(`${BASE_URL}/trip/${params.id}`);

    const decideCandidate = async (boolean, candidateId) => {
        if(window.confirm("Tem certeza que quer confirmar a opção selecionada?")) {
            try {
                let body = {
                    approve: boolean
                };
    
                const headersAPI = {
                    headers: {
                        auth: localStorage.getItem("token")
                    }
                };
    
                await axios.put(`${BASE_URL}/trips/${params.id}/candidates/${candidateId}/decide`, body, headersAPI);
                alert("Resultado computado!");
                getTripDetails();

            } catch(error) {
                console.log(error);
            }
        }
    };

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
                                <button onClick={ () => decideCandidate(true, candidate.id) }>Aprovar</button>
                                <button onClick={ () => decideCandidate(false, candidate.id) }>Reprovar</button>
                            </div>
                        </div>
                    );
                })}

            </div>

            <div>
                <h3>Candidatos Aprovados</h3>

                <ul>
                    {tripDetails.trip.approved.map((person) => {
                        return <li key={person.name}>{person.name}</li>   
                    })}
                </ul>
            </div>

            </>)}

            <button onClick={ () => {goBack(navigate)} }>Voltar para o Painel ADM</button>
        </div>
    );
};