import { useNavigate } from "react-router-dom";
import { CustomizedButton } from "../../components/CustomizedButton/CustomizedButton";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { TripCard } from "../../components/TripCard/TripCard";
import { BASE_URL } from "../../constants/requests";
import { useRequestData } from "../../hooks/useRequestData";
import { goBack, goToApplicationForm } from "../../routes/coordinator";
import { TripsListContainer, HeaderContainer, OutOfBoxText } from "./styles";

export function ListTripsPage() {
    const navigate = useNavigate();
    const [trips, getTrips, isLoading] = useRequestData(`${BASE_URL}/trips`);

    return (
        <TripsListContainer>

            <HeaderContainer>
                <CustomizedButton onClick={() => goBack(navigate)} text={"Voltar"} />

                <PageTitle text={"Lista de Viagens"} />

                <CustomizedButton onClick={() => goToApplicationForm(navigate)} text={"Inscrever-se"} />
            </HeaderContainer>

            {isLoading && <OutOfBoxText>Carregando viagens...</OutOfBoxText>}

            {!isLoading && trips && trips.trips.length === 0 &&
            <OutOfBoxText>Desculpe, no momento não temos viagens disponíveis.</OutOfBoxText>}

            {!isLoading && trips && <TripCard trips={trips.trips} />}

        </TripsListContainer>
    );
};