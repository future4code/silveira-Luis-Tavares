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
        <div className="border rounded-2 flex flex-col justify-between mb-5 p-2">

            <div onClick={onClick} className="">
                <span className="text-xs">Enviado por: {username}</span>
                <h2 className="text-xl">{title}</h2>
                <span>{body}</span>
            </div>

            <div className="flex">
                <div className="border rounded-full p-1 flex items-center">
                    <img src={upVoteIcon} alt="Up Vote" onClick={handleUpVote} className={userVote === 1 ? ("h-5 bg-green-500") : ("h-5")} />
                    <span className="mx-5">{voteSum}</span>
                    <img src={downVoteIcon} alt="Down Vote" onClick={handleDownVote} className={userVote === -1 ? ("h-5 bg-red-500") : ("h-5")} />
                </div>

                <div className="border rounded-full p-1 flex items-center">
                    <img src={commentIcon} alt="Comentários" className="h-4.5" />
                    <span className="ml-2">{commentCount}</span>
                </div>
            </div>

        </div>
    );
};