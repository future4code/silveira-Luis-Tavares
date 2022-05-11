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
         className="flex flex-col">
            <input 
             required
             name="username"
             value={form.username}
             type="text" 
             placeholder="Nome" 
             onChange={ onChange }
             className="border p-1" />

            <input 
             required
             name="email"
             value={form.email}
             type="email"
             placeholder="Email"
             onChange={ onChange }
             className="border p-1"/>
            
            <input 
             required
             name="password"
             value={form.password}
             type="password"
             placeholder="Senha"
             onChange={ onChange }
             className="border p-1" />

            <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>

            <div className="flex">
                <input type="checkbox" />
                <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
            </div>

            <button 
             type="submit"
             className="border">
                Cadastrar
            </button>            
        </form>
    );
};