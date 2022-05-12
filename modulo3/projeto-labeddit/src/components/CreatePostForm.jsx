import { useForm } from "../hooks/useForm";
import { createPost } from "../services/posts";

export function CreatePostForm({getPosts}) {
    const {form, onChange, cleanFields} = useForm({title: "", body: ""});
    
    const sendPost = (event) => {
        event.preventDefault();
        createPost(form, cleanFields, getPosts);
    };

    return (
        <form onSubmit={sendPost} className="flex flex-col gap-2">

            <input placeholder="Título..." name="title" value={form.title} onChange={onChange} className="default-input bg-zinc-200 placeholder:text-zinc-500" />

            <textarea
            placeholder="Escreva seu post..."
            name="body"
            value={form.body}
            onChange={onChange}
            className="border-transparent rounded-lg resize-none h-24 p-2 bg-zinc-200 placeholder:text-zinc-500 resize-none">
            </textarea>

            <button 
            type="submit"
            className="colored-button">
                Postar
            </button>

            <div className="h-0.5 bg-gradient-to-r from-pink-400 to-orange-400 mb-8" />

        </form>
    );
};