import upVoteIcon from "../assets/up-vote.svg";
import downVoteIcon from "../assets/down-vote.svg";
import commentIcon from "../assets/comment.svg";

import { handlePostVote } from "../services/posts";

export function PostCard({postId, onClick, username, title, body, voteSum, userVote, commentCount, getPosts}) {

    const handleUpVote = () => {
        if(userVote === 1)
         handlePostVote(undefined, postId, getPosts);
        else
         handlePostVote(1, postId, getPosts);
    };

    const handleDownVote = () => {
        if(userVote === -1)
         handlePostVote(undefined, postId, getPosts);
        else
         handlePostVote(-1, postId, getPosts);
    };

    return (
        <div className="border rounded-lg p-2 flex flex-col justify-between gap-3 mb-5 p-2">

            <div onClick={onClick}>
                <span className="text-xs text-zinc-500">Enviado por: {username}</span>
            </div>

            <div onClick={onClick}>
                <h2 className="text-lg font-medium">{title}</h2>
                <span>{body}</span>
            </div>

            <div className="flex gap-x-4">
                <div className="icon-container">
                    <img src={upVoteIcon} alt="Up Vote" onClick={handleUpVote} className={userVote === 1 ? ("h-4 bg-green-500") : ("h-4")} />
                    <span className="text-xs text-zinc-500 mx-4">{voteSum}</span>
                    <img src={downVoteIcon} alt="Down Vote" onClick={handleDownVote} className={userVote === -1 ? ("h-4 bg-red-500") : ("h-4")} />
                </div>

                <div className={commentCount ? "icon-container w-12" : "icon-container"}>
                    <img src={commentIcon} alt="Comentários" className="h-4" />
                    <span className="text-xs">{commentCount}</span>
                </div>
            </div>

        </div>
    );
};