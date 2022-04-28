import { useNavigate } from "react-router-dom";
import { Botao } from "../../components/CustomizedButton/styles";
import { TripCard } from "../../components/TripCard/TripCard";
import { BASE_URL } from "../../constants/requests";
import { useRequestData } from "../../hooks/useRequestData";
import { goBack, goToApplicationForm } from "../../routes/coordinator";
import { TripsListContainer, HeaderContainer, NoTripMessage } from "./styles";

export function ListTripsPage() {
    const navigate = useNavigate();
    const [trips] = useRequestData(`${BASE_URL}/trips`);

    return (
        <TripsListContainer>
            <HeaderContainer>
                <Botao onClick={() => goBack(navigate)}>Voltar</Botao>

                <h2>Lista de Viagens</h2>

                <Botao onClick={() => goToApplicationForm(navigate)}>Inscrever-se</Botao>
            </HeaderContainer>

            {trips && trips.trips.length > 0 ? (
            <TripCard trips={trips.trips} />) : (<NoTripMessage>Desculpe, no momento não temos viagens disponíveis.</NoTripMessage>)}
        </TripsListContainer>
    );
};