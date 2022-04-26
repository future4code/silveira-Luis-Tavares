import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHomePage } from "../pages/AdminHomePage/AdminHomePage";
import { ApplicationFormPage } from "../pages/ApplicationFormPage/ApplicationFormPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { ListTripsPage } from "../pages/TripListPage/TripsListPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { CreateTripPage } from "../pages/CreateTripPage/CreateTripPage";
import { TripDetailsPage } from "../pages/TripDetailsPage/TripDetailsPage";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route index element={ <HomePage /> } />
                <Route path="trips/list" element={ <ListTripsPage /> } />
                <Route path="trips/application" element={ <ApplicationFormPage /> } />
                <Route path="login" element={ <LoginPage /> } />
                <Route path="admin/trips/list" element={ <AdminHomePage /> } />
                <Route path="admin/trips/create" element={ <CreateTripPage /> } />
                <Route path="admin/trips/:id" element={ <TripDetailsPage /> } />

            </Routes>
        </BrowserRouter>
    );
};