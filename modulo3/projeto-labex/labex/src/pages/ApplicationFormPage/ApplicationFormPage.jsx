import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "../../constants/countries";
import { BASE_URL } from "../../constants/requests";
import { useForm } from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData";
import { goBack } from "../../routes/coordinator";

export function ApplicationFormPage() {
    const [tripId, setTripId] = useState("");
    const navigate = useNavigate();
    const [trips] = useRequestData(`${BASE_URL}/trips`);
    const {form, onChange, cleanFields} = useForm({
        name: "",
        age: 0,
        applicationText: "",
        profession: "",
        country: ""
    });
    
    const tripsList = trips && trips.trips.map((trip) => {
        return (
            <option key={trip.id} value={trip.id}>{trip.name}</option>
        )
    });

    const countriesList = countries.map((country) => {
        return (
            <option key={country.sigla2}>{country.nome}</option>
        )
    });

    const onChangeTripId = event => setTripId(event.target.value); 
    
    const submitApplication = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`${BASE_URL}/trips/${tripId}/apply`, form);
            alert("Inscrição efetuada com sucesso!");
            cleanFields();

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h3>Inscreva-se para uma viagem</h3>

            <form onSubmit={submitApplication}>
                <select defaultValue="" onChange={onChangeTripId}>
                    <option value="" disabled>Escolha uma Viagem</option>
                    {tripsList}
                </select>

                <input placeholder="Nome" name="name" value={form.name} onChange={onChange} required />
                <input type="number" placeholder="Idade" name="age" value={form.age} onChange={onChange} required />
                <input placeholder="Texto de inscrição" name="applicationText" value={form.applicationText} onChange={onChange} required />
                <input placeholder="Profissão" name="profession" value={form.profession} onChange={onChange} required />

                <select name="country" value={form.country} onChange={onChange} required>
                    <option value="" disabled>Escolha um País</option>
                    {countriesList}
                </select>

                <div>
                    <button onClick={ () => goBack(navigate) }>Voltar</button>
                    <button tton>Enviar</button>
                </div>
            </form>

        </div>
    );
};