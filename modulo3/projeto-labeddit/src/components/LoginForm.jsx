import { useForm } from "../hooks/useForm";
import { login } from "../services/user";

import { useNavigate } from "react-router-dom";
import { goToSignupPage } from "../router/coordinator";

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
                     className="default-input" />
                    <input
                     required
                     name="password"
                     value={form.password}
                     type="password"
                     placeholder="Senha"
                     onChange={ onChange }
                     className="default-input" />
                </div>

                <button
                 type="submit"
                 className="colored-rounded-button mt-6">
                    Continuar
                </button>

                <div className="h-0.5 bg-gradient-to-r from-pink-400 to-orange-400 my-5" />

                <button
                 type="button"
                 onClick={ () => goToSignupPage(navigate) }
                 className="border rounded-full border-orange-500 text-orange-500 font-semibold p-2 hover:cursor-pointer">
                    Crie uma conta!
                </button>

        </form>
    );
};