import React from "react";
import { useNavigate } from "react-router-dom";

import { useUnprotectedPage } from "../hooks/useUnprotectedPage";

import { LoginForm } from "../components/LoginForm";

import { goToSignupPage } from "../router/coordinator";
import { Header } from "../components/Header";

export function LoginPage() {
    useUnprotectedPage();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center">
            <h1>LabEddit</h1>
            <p>O projeto de rede social da Labenu</p>

            <LoginForm />

            <button
            type="button"
            onClick={ () => goToSignupPage(navigate) }
            className="border border-grey p-1 hover:cursor-pointer hover:bg-gray-300">
                Crie uma conta!
            </button>
        </div>
    );
};