import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToFeedListPage } from "../router/coordinator";

import closeIcon from "../assets/close.svg";
import logo from "../assets/logo.png";

export function Header({isPostPage}) {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        goToLoginPage(navigate);
    };

    return (
        <header className="border-transparent bg-zinc-200 flex items-center justify-end mb-5 p-2 w-screen relative">
            <img src={closeIcon} alt="Ícone voltar" onClick={() => goToFeedListPage(navigate)} className={isPostPage ? "h-8 absolute left-0" : "hidden"} />

            <img src={logo} alt="Labedit logo" className="h-7 absolute right-2/4" />

            <button 
             type="button"
             onClick={ token ? logout : () => goToLoginPage(navigate) }
             className="text-blue-500 font-semibold">
                 { token ? "Logout" : "Login" }
             </button>
        </header>
    );
};