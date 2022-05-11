import { useForm } from "../hooks/useForm";
import { login } from "../services/user";

import { useNavigate } from "react-router-dom";

export function LoginForm() {
    const {form, onChange, cleanFields} = useForm({email: "", password: ""});
    const navigate = useNavigate();

    const onSubmitLogin = (event) => {
        event.preventDefault();
        login(form, cleanFields, navigate);
    };
    
    return (
        <form
            onSubmit={ onSubmitLogin }
            className="flex flex-col w-4/5">
                <div className="flex flex-col gap-2">
                    <input
                     required
                     name="email"
                     value={form.email}
                     type="email" 
                     placeholder="Email" 
                     onChange={ onChange }
                     className="border p-2 rounded" />
                    <input
                     required
                     name="password"
                     value={form.password}
                     type="password"
                     placeholder="Senha"
                     onChange={ onChange }
                     className="border p-2 rounded" />
                </div>

                <button
                 type="submit"
                 className="colored-button mt-6">
                    Continuar
                </button>

                <hr />
        </form>
    );
};