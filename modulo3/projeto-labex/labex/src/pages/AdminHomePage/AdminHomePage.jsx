import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/requests";
import { useProtectedData } from "../../hooks/useProtectedData";
import { useRequestData } from "../../hooks/useRequestData";
import { goBack, goToLoginPage, goToTripCreation, goToTripDetails } from "../../routes/coordinator";
import { CustomizedButton } from "../../components/CustomizedButton/CustomizedButton";
import { ContainerAdminHomePage, OutOfBoxText, TripsContainer } from "./styles";
import deleteIcon from "../../assets/imgs/delete.svg";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export function AdminHomePage() {
    useProtectedData();
    
    const [trips, getTrips, isLoading] = useRequestData(`${BASE_URL}/trips`);
    const navigate = useNavigate();

    const deleteTrip = async (tripId) => {
        if(window.confirm("Tem certeza que deseja remover a viagem selecionada?")) {
            try {
                const headersAPI = {
                    headers: {
                        auth: localStorage.getItem("token")
                    }
                };

                await axios.delete(`${BASE_URL}/trips/${tripId}`, headersAPI);
                alert("Viagem removida com sucesso!");
                getTrips();

            } catch(error) {
                alert("Falha ao deletar a viagem");
                console.log(error);
            }
        }
    };

    const logout = () => {
        alert("Logout realizado");
        localStorage.removeItem("token");
        goToLoginPage(navigate);
    };

    return (
        <ContainerAdminHomePage>

            <PageTitle text={"Painel administrativo"} />

            {isLoading && <OutOfBoxText>Carregando...</OutOfBoxText>}

            {!isLoading && trips && trips.trips.length === 0 && <OutOfBoxText>Sem viagens existentes.</OutOfBoxText>}

            {!isLoading && trips && 
            trips.trips.map((trip) => {
                return (
                    <TripsContainer key={trip.id}>
                        <p onClick={ () => goToTripDetails(navigate, trip.id) }>{trip.name}</p>
                
                        <img onClick={ () => deleteTrip(trip.id) } src={deleteIcon} />
                    </TripsContainer>
                );
            })}


            <div>
                <CustomizedButton onClick={ () => goBack(navigate) } text={"Voltar"} />
                <CustomizedButton onClick={ () => goToTripCreation(navigate) } text={"Criar viagem"} />
                <CustomizedButton onClick={ logout } text={"Logout"} />
            </div>

        </ContainerAdminHomePage>
    );
};