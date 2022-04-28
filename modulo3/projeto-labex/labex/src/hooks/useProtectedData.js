import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";

export function useProtectedData() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token === null) {
            goToLoginPage(navigate);
        }
    }, []);
};