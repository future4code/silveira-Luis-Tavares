import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constants/requests";
import { goBack, goToAdminHomePage } from "../../routes/coordinator";

export function LoginPage() {
    const {form, onChange, cleanFields} = useForm({email: "", password: ""});
    const navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${BASE_URL}/login`, form);
            localStorage.setItem("token", response.data.token);
            goToAdminHomePage(navigate);

        } catch(error) {
            alert("Email ou senha inválidos, tente novamente.");
            cleanFields();
        }
    };
    
    return (
        <div>
            <h3>Login</h3>

            <form onSubmit={ login }>
                <div>
                    <input placeholder="Email" name="email" value={form.email} onChange={onChange} />
                    <input type="password" placeholder="Senha" name="password" value={form.password} onChange={onChange} />
                </div>
                <div>
                    <button onClick={ () => goBack(navigate) }>Voltar</button>
                    <button>Entrar</button>
                </div>
            </form>
        </div>
    );
};