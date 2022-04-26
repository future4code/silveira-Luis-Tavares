import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "../../constants/countries";
import { BASE_URL } from "../../constants/requests";
import { useRequestData } from "../../hooks/useRequestData";
import { goBack } from "../../routes/coordinator";

export function ApplicationFormPage() {
    const [tripId, setTripId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [applicationText, setApplicationText] = useState("");
    const [currentJob, setCurrentJob] = useState("");
    const [country, setCountry] = useState("");
    const navigate = useNavigate();
    const trips = useRequestData(`${BASE_URL}/trips`);

    // ---------- INPUTS CONTROLADOS ----------
    const onChangeTripId = event => setTripId(event.target.value);
    const onChangeName = event => setName(event.target.value);
    const onChangeAge = event => setAge(event.target.value);
    const onChangeText = event => setApplicationText(event.target.value);
    const onChangeJob = event => setCurrentJob(event.target.value);
    const onChangeCountry = event => setCountry(event.target.value);
    
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

    const submitApplication = async () => {
        try {
            let body = {
                name: name,
                age: age,
                applicationText: applicationText,
                profession: currentJob,
                country: country
            };

            await axios.post(`${BASE_URL}/trips/${tripId}/apply`, body);
            alert("Inscrição efetuada com sucesso!");

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h3>Inscreva-se para uma viagem</h3>

            <form>
                <select defaultValue="" onChange={onChangeTripId}>
                    <option value="" disabled>Escolha uma Viagem</option>
                    {tripsList}
                </select>

                <input placeholder="Nome" value={name} onChange={onChangeName} />
                <input placeholder="Idade" value={age} onChange={onChangeAge} />
                <input placeholder="Texto de inscrição" value={applicationText} onChange={onChangeText} />
                <input placeholder="Profissão" value={currentJob} onChange={onChangeJob} />

                <select defaultValue="" onChange={onChangeCountry}>
                    <option value="" disabled>Escolha um País</option>
                    {countriesList}
                </select>
            </form>

            <div>
                <button onClick={ () => goBack(navigate) }>Voltar</button>
                <button onClick={submitApplication}>Enviar</button>
            </div>
        </div>
    );
};