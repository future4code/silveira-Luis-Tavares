import { Header } from "../components/Header";
import { SignupForm } from "../components/SignupForm";
import { useUnprotectedPage } from "../hooks/useUnprotectedPage";

export function SignupPage() {
    useUnprotectedPage();

    return (
        <>
            <Header />

            <div className="flex flex-col justify-center items-center">
                <h1>Olá, boas vindas ao LabEddit ;)</h1>
                <SignupForm />
            </div>
        </>
    );
};