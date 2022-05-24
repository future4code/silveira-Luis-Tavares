import { Header } from "../components/Header";
import { SignupForm } from "../components/SignupForm";
import { useUnprotectedPage } from "../hooks/useUnprotectedPage";

export function SignupPage() {
    useUnprotectedPage();

    return (
        <>
            <Header />

            <div className="flex flex-col justify-center items-center">
                <h1 className="relative right-5 text-3xl font-bold">Olá, boas vindas ao <br /> LabEddit ;)</h1>

                <SignupForm />
            </div>
        </>
    );
};