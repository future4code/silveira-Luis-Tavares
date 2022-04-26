import { useNavigate } from "react-router-dom";
import { TripCard } from "../../components/TripCard/TripCard";
import { BASE_URL } from "../../constants/requests";
import { useRequestData } from "../../hooks/useRequestData";
import { goBack, goToApplicationForm } from "../../routes/coordinator";
import { TripsListContainer, HeaderContainer } from "./styles";

export function ListTripsPage() {
    const navigate = useNavigate();
    const trips = useRequestData(`${BASE_URL}/trips`);

    return (
        <TripsListContainer>
            <HeaderContainer>
                <button onClick={() => goBack(navigate)}>Voltar</button>

                <h2>Lista de Viagens</h2>

                <button onClick={() => goToApplicationForm(navigate)}>Inscrever-se</button>
            </HeaderContainer>

            {trips && <TripCard trips={trips.trips} />}
        </TripsListContainer>
    );
};