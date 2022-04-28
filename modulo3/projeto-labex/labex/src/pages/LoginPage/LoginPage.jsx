import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/requests";
import { goBack, goToAdminHomePage } from "../../routes/coordinator";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onChangeEmail = event => setEmail(event.target.value);
    const onChangePassword = event => setPassword(event.target.value);

    const login = async () => {
        try {
            let body = {
                email: email,
                password: password
            }

            const response = await axios.post(`${BASE_URL}/login`, body);
            localStorage.setItem("token", response.data.token);
            goToAdminHomePage(navigate);

        } catch(error) {
            alert("Email ou senha inválidos, tente novamente.");
            setPassword("");
        }
    };
    
    return (
        <div>
            <h3>Login</h3>

            <div>
                <input placeholder="Email" value={email} onChange={onChangeEmail} />
                <input placeholder="Senha" value={password} onChange={onChangePassword} />
            </div>

            <div>
                <button onClick={ () => goBack(navigate) }>Voltar</button>
                <button onClick={ login }>Entrar</button>
            </div>
        </div>
    );
};