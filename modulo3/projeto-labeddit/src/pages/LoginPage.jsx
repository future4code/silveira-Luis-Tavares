import React from "react";
import { useNavigate } from "react-router-dom";

import { useUnprotectedPage } from "../hooks/useUnprotectedPage";

import { LoginForm } from "../components/LoginForm";

import logo from "../assets/logo.png";

export function LoginPage() {
    useUnprotectedPage();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center h-screen w">

            <div className="flex flex-col justify-center items-center mb-16">
                <img src={logo} alt="Labbedit logo" className="w-2/5" />
                <h1 className="text-4xl my-1 font-bold text-gray-700">LabEddit</h1>
                <p>O projeto de rede social da Labenu</p>
                <p className="text-xs text-slate-500 font-semibold">made by @luissfmt</p>
            </div>

            <LoginForm />

            
        </div>
    );
};