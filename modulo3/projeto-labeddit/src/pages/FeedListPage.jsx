import { useProtectedPage } from "../hooks/useProtectedPage";
import { useRequestData } from "../hooks/useRequestData";

import { goToPostPage } from "../router/coordinator";
import { useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { PostCard } from "../components/PostCard";
import { CreatePostForm } from "../components/CreatePostForm";
import { useEffect } from "react";

export function FeedListPage() {
    useProtectedPage();
    const {data, getData, isLoading} = useRequestData([], `/posts`);
    const navigate = useNavigate();

    return (
        <>
            <Header />

            <div className="flex flex-col justify-center w-4/5 m-auto">

                <CreatePostForm getPosts={getData} />
                
                {isLoading && <span className="text-center">Carregando posts...</span>}

                {!isLoading && data && data.map((post) => {
                    return <PostCard key={post.id}
                     postId={post.id}
                     onClick={ () => goToPostPage(navigate, post.id) } 
                     username={post.username} title={post.title}
                     voteSum={post.voteSum}
                     userVote={post.userVote}
                     getPosts={getData}
                     commentCount={post.commentCount} />
                })}

            </div>
        </>
    );
};