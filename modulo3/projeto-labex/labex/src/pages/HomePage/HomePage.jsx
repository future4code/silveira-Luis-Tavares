import { useNavigate } from "react-router-dom";
import { goToTripsList, goToLoginPage } from "../../routes/coordinator";
import { HomePageContainer } from "./styles";
import logo from "../../assets/imgs/logo.png";

export function HomePage() {
    const navigate = useNavigate();

    return (
        <HomePageContainer>

            <div>
                <img src={logo} alt="logo" />
            </div>

            <div>
                <button onClick={() => goToTripsList(navigate)}>Ver Viagens</button>
                <button onClick={() => goToLoginPage(navigate)}>Área de Admin</button>
            </div>
        </HomePageContainer>
    );
};