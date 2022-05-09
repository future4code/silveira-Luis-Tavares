import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { goToFeedListPage } from "../router/coordinator";

export function useUnprotectedPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token) {
            goToFeedListPage(navigate);
        }
    }, []);
}; 