import { useParams } from "react-router-dom";

import { useProtectedPage } from "../hooks/useProtectedPage";
import { useRequestData } from "../hooks/useRequestData";
import { CreateCommentForm } from "../components/CreateCommentForm";

import loadingIcon from "../assets/loading.png";

import { CommentCard } from "../components/CommentCard";
import { Header } from "../components/Header";
import { PostCard } from "../components/PostCard";


export function PostPage() {
    useProtectedPage();
    const params = useParams();
    const posts = useRequestData([], `/posts`);
    const comments = useRequestData([], `/posts/${params.id}/comments`);

    return (
        <>
            <Header isPostPage />

            <div className="w-4/5 m-auto">

                {!posts.isLoading && posts && posts.data.map((post) => {
                    if(post.id === params.id) {
                        return <PostCard key={post.id} 
                         postId={post.id}
                         username={post.username} 
                         title={post.title}
                         body={post.body}
                         voteSum={post.voteSum}
                         userVote={post.userVote}
                         commentCount={post.commentCount}
                         getPosts={posts.getData} />
                    }
                })}

                <CreateCommentForm postId={params.id} getComments={comments.getData} />

                {posts.isLoading && comments.isLoading && <img src={loadingIcon} alt="Loading" className="m-auto w-7 animate-spin" />}

                {!comments.isLoading && comments && comments.data.map((comment) => {
                    return <CommentCard key={comment.id}
                     commentId={comment.id}
                     username={comment.username}
                     body={comment.body}
                     voteSum={comment.voteSum}
                     userVote={comment.userVote}
                     getComments={comments.getData} />
                })}

            </div>
        </>
    );
};