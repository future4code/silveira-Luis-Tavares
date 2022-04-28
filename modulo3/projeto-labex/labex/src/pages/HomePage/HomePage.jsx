import { useNavigate } from "react-router-dom";
import { goToTripsList, goToAdminHomePage } from "../../routes/coordinator";
import { HomePageContainer } from "./styles";
import logo from "../../assets/imgs/logo.png";
import { Botao } from "../../components/CustomizedButton/styles";

export function HomePage() {
    const navigate = useNavigate();

    return (
        <HomePageContainer>

            <div>
                <img src={logo} alt="logo" />
            </div>

            <div>
                <Botao onClick={() => goToTripsList(navigate)}>Ver viagens</Botao>
                <Botao onClick={() => goToAdminHomePage(navigate)}>Área de Admin</Botao>
            </div>
        </HomePageContainer>
    );
};