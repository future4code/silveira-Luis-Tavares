import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CustomizedButton } from "../../components/CustomizedButton/CustomizedButton";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { planets } from "../../constants/planets";
import { BASE_URL } from "../../constants/requests";
import { useForm } from "../../hooks/useForm";
import { useProtectedData } from "../../hooks/useProtectedData";
import { goBack } from "../../routes/coordinator";
import { FormContainer,  } from "./styles";

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

            <PageTitle text={"Cadastrar nova viagem"} />

            <FormContainer onSubmit={createTrip}>
                <input placeholder="Nome" name="name" value={form.name} onChange={onChange} required />
                <select defaultValue="" name="planet" onChange={onChange} required>
                    <option value="" disabled>Escolha um planeta</option>
                    {planetsList}
                </select>
                <input type="date" name="date" value={form.date} onChange={onChange} required />
                <input placeholder="Descrição" name="description" value={form.description} onChange={onChange} required />
                <input type="number" placeholder="Duração em dias" name="durationInDays" value={form.durationInDays} onChange={onChange} required />  

                <div>
                    <CustomizedButton onClick={ () => goBack(navigate) } text={"Voltar"} />
                    <CustomizedButton text={"Cadastrar"} />
                </div> 
            </FormContainer>
    
        </div>
    );
};