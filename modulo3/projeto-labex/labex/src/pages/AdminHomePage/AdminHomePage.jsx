import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/requests";
import { useProtectedData } from "../../hooks/useProtectedData";
import { useRequestData } from "../../hooks/useRequestData";
import { goToTripDetails } from "../../routes/coordinator";

export function AdminHomePage() {
    useProtectedData();

    const trips = useRequestData(`${BASE_URL}/trips`);
    const navigate = useNavigate();

    return (
        <div>

            <h3>Painel administrativo</h3>

            {trips && trips.trips.map((trip) => {
                return (
                    <div onClick={ () => goToTripDetails(navigate, trip.id) } key={trip.id}>
                        <p>{trip.name}</p>
                        <button>Excluir</button>
                    </div>
                );
            })}

            <div>
                <button>Voltar</button>
                <button>Criar Viagem</button>
                <button>Logout</button>
            </div>

        </div>
        );
};