import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/requests";
import { useProtectedData } from "../../hooks/useProtectedData";
import { useRequestData } from "../../hooks/useRequestData";
import { goBack, goToLoginPage, goToTripCreation, goToTripDetails } from "../../routes/coordinator";
import { CustomizedButton } from "../../components/CustomizedButton/CustomizedButton";

export function AdminHomePage() {
    useProtectedData();
    
    const [trips, getTrips] = useRequestData(`${BASE_URL}/trips`);
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
        <div>

            <h3>Painel administrativo</h3>

            {trips && trips.trips.length > 0 ? (
                trips.trips.map((trip) => {
                return (
                    <div key={trip.id}>
                        <div onClick={ () => goToTripDetails(navigate, trip.id) }>
                            <p>{trip.name}</p>
                        </div>
                        
                        <button onClick={ () => deleteTrip(trip.id) }>Remover</button>
                    </div>
                );
            })) : (<p>Sem viagens existentes.</p>)}

            <div>
                <CustomizedButton onClick={ () => goBack(navigate) }>Voltar</CustomizedButton>
                <CustomizedButton onClick={ () => goToTripCreation(navigate) }>Criar Viagem</CustomizedButton>
                <CustomizedButton onClick={ logout }>Logout</CustomizedButton>
            </div>

        </div>
    );
};