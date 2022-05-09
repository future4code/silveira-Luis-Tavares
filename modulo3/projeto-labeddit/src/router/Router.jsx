import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { FeedListPage } from "../pages/FeedListPage";
import { LoginPage } from "../pages/LoginPage";
import { PostPage } from "../pages/PostPage";
import { SignupPage } from "../pages/SignupPage";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route index element={ <LoginPage /> } />
                <Route path="/signup" element={ <SignupPage /> } />
                <Route path="/feed" element={ <FeedListPage /> } />
                <Route path="/feed/post/:id" element={ <PostPage /> } />
                <Route path="/*" element={ <ErrorPage /> } />

            </Routes>
        </BrowserRouter>
    );
};