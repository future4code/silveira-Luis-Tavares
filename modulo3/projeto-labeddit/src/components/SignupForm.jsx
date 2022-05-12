import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/user";

export function SignupForm() {
    const {form, onChange, cleanFields} = useForm({username: "", email: "", password: ""});
    const navigate = useNavigate();

    const onSubmitSignup = (event) => {
        event.preventDefault();
        signUp(form, cleanFields, navigate);
    };

    return (
        <form 
         onSubmit={ onSubmitSignup }
         className="flex flex-col gap-2 w-4/5 mt-44">
            <input 
             required
             name="username"
             value={form.username}
             type="text" 
             placeholder="Nome de usuário" 
             onChange={ onChange }
             className="default-input" />

            <input 
             required
             name="email"
             value={form.email}
             type="email"
             placeholder="E-mail"
             onChange={ onChange }
             className="default-input"/>
            
            <input 
             required
             name="password"
             value={form.password}
             type="password"
             placeholder="Senha"
             onChange={ onChange }
             className="default-input" />

            <p className="text-xs mt-24">Ao continuar, você concorda com o nosso <span className="text-blue-500">Contrato de usuário</span> e nossa <span className="text-blue-500">Política de Privacidade</span></p>

            <div className="flex justify-between items-center">
                <input required type="checkbox" className="mr-4" />
                <p className="text-xs">Eu concordo em receber emails sobre coisas legais no Labeddit</p>
            </div>

            <button 
             type="submit"
             className="colored-rounded-button">
                Cadastrar
            </button>            
        </form>
    );
};