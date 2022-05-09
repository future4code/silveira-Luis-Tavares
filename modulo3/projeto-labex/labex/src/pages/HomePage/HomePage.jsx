import { useNavigate } from "react-router-dom";
import { goToTripsList, goToAdminHomePage } from "../../routes/coordinator";
import { HomePageContainer } from "./styles";
import logo from "../../assets/imgs/logo.png";
import { CustomizedButton } from "../../components/CustomizedButton/CustomizedButton";

export function HomePage() {
    const navigate = useNavigate();

    return (
        <HomePageContainer>

            <div>
                <img src={logo} alt="logo" />
            </div>

            <div>
                <CustomizedButton onClick={() => goToTripsList(navigate)} text={"Ver viagens"} />
                <CustomizedButton onClick={() => goToAdminHomePage(navigate)} text={"Área de Admin"} />
            </div>
        </HomePageContainer>
    );
};