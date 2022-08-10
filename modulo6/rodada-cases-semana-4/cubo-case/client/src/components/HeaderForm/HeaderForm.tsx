import React from "react";

import { useForm } from "../../hooks/useForm";

import { createParticipation } from "../../services/participation";
import { Form } from "./styles";

export const HeaderForm: React.FC = () => {
    const {form, onChange, cleanFields} = useForm({
        first_name: "",
        last_name: "",
        participation: ""
    });

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createParticipation(form, cleanFields);
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