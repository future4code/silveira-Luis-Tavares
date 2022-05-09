import { useUnprotectedPage } from "../hooks/useUnprotectedPage";

import { Header } from "../components/Header";

export function FeedListPage() {
    useUnprotectedPage();

    return (
        <div>
            <Header />
            <h1>Feed Page</h1>
        </div>
    );
};