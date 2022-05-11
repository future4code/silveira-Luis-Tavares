import upVoteIcon from "../assets/up-vote.svg";
import downVoteIcon from "../assets/down-vote.svg";
import { handleCommentVote } from "../services/comments";

export function CommentCard({commentId, username, body, voteSum, userVote, getComments}) {

    const handleUpVote = () => {
        if(userVote === 1)
         handleCommentVote(undefined, commentId, getComments);
        else
         handleCommentVote(1, commentId, getComments);
    };

    const handleDownVote = () => {
        if(userVote === -1)
         handleCommentVote(undefined, commentId, getComments);
        else
         handleCommentVote(-1, commentId, getComments);
    };

    return (
        <div className="border border-black flex flex-col justify-between mb-5 p-2">
            <span className="text-xs">Enviado por: {username}</span>
            <h2>{body}</h2>

            <div className="border rounded-full flex p-1 w-fit">
                <img src={upVoteIcon} alt="Up Vote" onClick={handleUpVote} className={userVote === 1 ? ("h-5 bg-green-500") : ("h-5")} />
                <span className="mx-5">{voteSum}</span>
                <img src={downVoteIcon} alt="Down Vote" onClick={handleDownVote} className={userVote === -1 ? ("h-5 bg-red-500") : ("h-5")} />
            </div>
        </div>
    );
};