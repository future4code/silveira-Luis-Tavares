import React, { useContext } from "react";
import { ParticipationContext } from "../../context/ParticipationContext";

import { useForm } from "../../hooks/useForm";

import { createParticipation } from "../../services/requests";
import { Form } from "./styles";

export const HeaderForm: React.FC = () => {
    const { participations, setParticipations, participationsValue } = useContext(ParticipationContext); 

    const {form, onChange, cleanFields} = useForm({
        first_name: "",
        last_name: "",
        participation: ""
    });

    const remainingValue = participationsValue.length > 0
    ? 100 - participationsValue.reduce((prev, curr) => prev + curr)
    : 100;

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (form.participation > remainingValue) {
            alert(`The value '${form.participation}' is bigger than the current remaining value in the graph (${remainingValue}).`);
        } else if (participations.length >= 5) {
            alert("Max number of participations");
        } else {
            createParticipation(form, cleanFields, setParticipations);
        }
    };

    return (
        <header>
            <Form onSubmit={ onSubmit }>
                
                <input
                 required
                 name="first_name"
                 value={form.first_name}
                 type="text"
                 placeholder="First name"
                 onChange={onChange}
                />

                <input
                 required
                 name="last_name"
                 value={form.last_name}
                 type="text"
                 placeholder="Last name"
                 onChange={onChange}
                />

                <input
                 required
                 name="participation"
                 value={form.participation}
                 type="number"
                 placeholder="Participation"
                 onChange={onChange}
                />

                <button type="submit">
                    SEND
                </button>

            </Form>
        </header>
    );
};