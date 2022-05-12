import { useForm } from "../hooks/useForm";
import { createComment } from "../services/comments";

export function CreateCommentForm({postId, getComments}) {
    const {form, onChange, cleanFields} = useForm({body: ""});

    const sendComment = (event) => {
        event.preventDefault();
        createComment(postId, form, cleanFields, getComments);
    };
    
    return (
        <form onSubmit={sendComment} className="flex flex-col">
            <textarea
            placeholder="Adicionar comentário"
            name="body"
            value={form.body}
            onChange={onChange}
            className="border-transparent rounded-lg resize-none h-24 p-2 bg-zinc-200 placeholder:text-zinc-500" />

            <button
             type="submit"
             className="colored-button my-2">
                Responder
            </button>

            <div className="h-0.5 bg-gradient-to-r from-pink-400 to-orange-400 mb-8" />
        </form>
    );
};