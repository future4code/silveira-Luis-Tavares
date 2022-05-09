import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../router/coordinator";

export function Header() {
    const navigate = useNavigate();

    return (
        <header className="border border-black flex justify-between p-2">
            <h1>Logo</h1>
            <button 
             type="button"
             onClick={ () => goToLoginPage(navigate) }
             className="border">Entrar</button>
        </header>
    );
};