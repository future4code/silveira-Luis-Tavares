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
        <div className="border rounded-lg p-2 flex flex-col justify-between gap-3 mb-5 p-2">
            <span className="text-xs text-zinc-500">Enviado por: {username}</span>
            <h2 className="text-lg">{body}</h2>

            <div className="icon-container w-fit">
            <img src={userVote === 1 ? greenUpVoteIcon : upVoteIcon} alt="Up Vote" onClick={handleUpVote} className={userVote === 1 ? "h-4 hover:cursor-pointer" : "hover:cursor-pointer"} />
                <span className="text-xs text-zinc-500 mx-5">{voteSum}</span>
                <img src={userVote === -1 ? redDownVoteIcon : downVoteIcon} alt="Down Vote" onClick={handleDownVote} className={userVote === -1 ? "h-4 hover:cursor-pointer" : "hover:cursor-pointer"} />
            </div>
        </div>
    );
};