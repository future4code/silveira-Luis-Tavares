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
            value={form.value}
            onChange={onChange}
            className="border">

            </textarea>

            <button
             type="submit"
             className="border-transparent rounded-full bg-slate-400 w-5/5">
                Responder
            </button>
        </form>
    );
};