import axios from "axios";
import { useNavigate } from "react-router-dom";
import { planets } from "../../constants/planets";
import { BASE_URL } from "../../constants/requests";
import { useForm } from "../../hooks/useForm";
import { useProtectedData } from "../../hooks/useProtectedData";
import { goBack } from "../../routes/coordinator";

export function CreateTripPage() {
    useProtectedData();
    const navigate = useNavigate();
    const {form, onChange, cleanFields} = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: 0
    });

    const planetsList = planets.map((planet) => {
        return <option key={planet} value={planet}>{planet}</option>;
    });

    const createTrip = async (event) => {
        event.preventDefault();
        try {
            const headersAPI = {
                headers: {
                    auth: localStorage.getItem("token")
                }
            };
            
            await axios.post(`${BASE_URL}/trips`, form, headersAPI);
            alert("Viagem criada com sucesso!");
            cleanFields();

        } catch(error) {
            alert("Falha ao criar viagem, favor tentar novamente");
            console.log(error);
        }
    };

    return (
        <div>

            <h3>Cadastrar nova viagem</h3>

            <form onSubmit={createTrip}>
                <input placeholder="Nome" name="name" value={form.name} onChange={onChange} required />
                <select defaultValue="" name="planet" onChange={onChange} required>
                    <option value="" disabled>Escolha um planeta</option>
                    {planetsList}
                </select>
                <input type="date" name="date" value={form.date} onChange={onChange} required />
                <input placeholder="Descrição" name="description" value={form.description} onChange={onChange} required />
                <input type="number" placeholder="Duração em dias" name="durationInDays" value={form.durationInDays} onChange={onChange} required />  

                <div>
                    <button onClick={ () => goBack(navigate) }>Voltar</button>
                    <button>Cadastrar</button>
                </div> 
            </form>
    
        </div>
    );
};