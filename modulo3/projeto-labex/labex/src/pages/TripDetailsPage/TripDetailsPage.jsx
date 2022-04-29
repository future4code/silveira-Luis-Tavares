import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { CustomizedButton } from "../../components/CustomizedButton/CustomizedButton";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { BASE_URL } from "../../constants/requests";
import { useProtectedData } from "../../hooks/useProtectedData";
import { useRequestData } from "../../hooks/useRequestData";
import { goBack } from "../../routes/coordinator";
import { 
    ContainerApprovedList, 
    ContainerCandidates, 
    ContainerTripDetails, 
    ContainerTripInfos, 
    FlexContainerCandidates, 
    OutOfBoxText } from "./styles";

export function TripDetailsPage() {
    useProtectedData();
    const navigate = useNavigate();
    const params = useParams();
    const [tripDetails, getTripDetails, isLoading] = useRequestData(`${BASE_URL}/trip/${params.id}`);

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
        <ContainerTripDetails>
            {isLoading && <OutOfBoxText>Carregando informações...</OutOfBoxText> }
            
            {!isLoading && tripDetails && 
            <ContainerTripInfos>
                <PageTitle text={tripDetails.trip.name} />
                <p><strong>Planeta:</strong> {tripDetails.trip.planet}</p>
                <p><strong>Descrição:</strong> {tripDetails.trip.description}</p>
                <p><strong>Duração:</strong> {tripDetails.trip.durationInDays} dias</p>
                <p><strong>Data de ínicio:</strong> {tripDetails.trip.date}</p>
            </ContainerTripInfos>}
        
        
        <div>    
        {!isLoading && tripDetails && tripDetails.trip.candidates.length === 0 && (<>
        <PageTitle text={"Candidatos Pendentes"} />
        <OutOfBoxText>Sem candidatos pendentes.</OutOfBoxText></>)}

        {!isLoading && tripDetails && tripDetails.trip.candidates.length > 0 && (<>
        <PageTitle text={"Candidatos Pendentes"} />

        <FlexContainerCandidates>
        {tripDetails.trip.candidates.map((candidate) => {
            return (
                <ContainerCandidates key={candidate.name}>
                    <div>
                        <h3>{candidate.name}</h3>
                        <p><strong>Idade:</strong> {candidate.age}</p>
                        <p><strong>Profissão:</strong> {candidate.profession}</p>
                        <p><strong>Texto de aplicação:</strong> {candidate.applicationText}</p>
                        <p><strong>País de origem:</strong> {candidate.country}</p>
                    </div>
    
                    <div>
                        <span onClick={ () => decideCandidate(false, candidate.id) }>❌</span>
                        <span onClick={ () => decideCandidate(true, candidate.id) }>✔️</span>
                    </div>
                </ContainerCandidates>
            );
        })}
        </FlexContainerCandidates></>)}
        </div>

        <ContainerApprovedList>
            {!isLoading && tripDetails && tripDetails.trip.approved.length === 0 && (<>
            <PageTitle text={"Candidatos Aprovados"} />
            <OutOfBoxText>Sem candidatos aprovados.</OutOfBoxText></>)}

            <ul>
            {!isLoading && tripDetails && tripDetails.trip.approved.length > 0 && (<>
            <PageTitle text={"Candidatos Aprovados"} />
            {tripDetails.trip.approved.map((person) => {
                return <li key={person.name}>- {person.name} -</li>   
            })}</>)}
            </ul>

            <CustomizedButton onClick={ () => {goBack(navigate)} } text={"Voltar para o Painel ADM"} />
        </ContainerApprovedList>

        </ContainerTripDetails>
    );
};