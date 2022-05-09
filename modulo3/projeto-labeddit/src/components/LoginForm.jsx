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
            className="flex flex-col">
                <div className="flex flex-col">
                    <input
                     required
                     name="email"
                     value={form.email}
                     type="email" 
                     placeholder="Email" 
                     onChange={ onChange }
                     className="border p-1" />
                    <input
                     required
                     name="password"
                     value={form.password}
                     type="password"
                     placeholder="Senha"
                     onChange={ onChange }
                     className="border p-1" />
                </div>

                <button
                 type="submit"
                 className="border p-1 hover:cursor-pointer hover:bg-gray-300">
                    Continuar
                </button>

                <hr />
        </form>
    );
};