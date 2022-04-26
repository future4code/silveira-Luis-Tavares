import { useNavigate } from "react-router-dom";
import { goBack, goToAdminHomePage } from "../../routes/coordinator";

export function LoginPage() {
    const navigate = useNavigate();
    
    return (
        <div>
            <h3>Login</h3>

            <div>
                <input placeholder="Email"/>
                <input placeholder="Senha"/>
            </div>

            <div>
                <button onClick={ () => goBack(navigate) }>Voltar</button>
                <button onClick={ () => goToAdminHomePage(navigate) }>Entrar</button>
            </div>
        </div>
    );
};