import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route index element={ <MainPage /> } />

            </Routes>
        </BrowserRouter>
    );
};