import { useForm } from "../hooks/useForm";
import { createPost } from "../services/posts";

export function CreatePostForm({getPosts}) {
    const {form, onChange, cleanFields} = useForm({title: "", body: ""});
    
    const sendPost = (event) => {
        event.preventDefault();
        createPost(form, cleanFields, getPosts);
    };

    return (
        <form onSubmit={sendPost} className="flex flex-col">

            <input placeholder="Título..." name="title" value={form.title} onChange={onChange} />

            <textarea
            placeholder="Escreva seu post..."
            name="body"
            value={form.body}
            onChange={onChange}
            className="border">
            </textarea>

            <button 
            type="submit"
            className="border-transparent rounded-full bg-slate-400 w-5/5">
                Postar
            </button>

        </form>
    );
};