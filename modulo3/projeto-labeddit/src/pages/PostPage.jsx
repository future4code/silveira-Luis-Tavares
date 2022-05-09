import { useUnprotectedPage } from "../hooks/useUnprotectedPage";

export function PostPage() {
    useUnprotectedPage();

    return (
        <h1>Post Page</h1>
    );
};