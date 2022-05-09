import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constants/requests";
import { goToHome, goToAdminHomePage } from "../../routes/coordinator";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { LoginContainer } from "./styles";
import { CustomizedButton } from "../../components/CustomizedButton/CustomizedButton";

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
            <PageTitle text={"Login"} />

            <LoginContainer onSubmit={ login }>
                <input placeholder="Email" name="email" value={form.email} onChange={onChange} />
                <input type="password" placeholder="Senha" name="password" value={form.password} onChange={onChange} />

                <div>
                    <CustomizedButton onClick={ () => goToHome(navigate) } text={"Voltar"} />
                    <CustomizedButton text={"Entrar"} />
                </div>
            </LoginContainer>
        </div>
    );
};