import { useRequestData } from "../hooks/useRequestData";

interface MovieGenreButtonProps {
    genre: string
}

export function MovieGenreButton({ genre }: MovieGenreButtonProps) {

    return (
        <button className="border rounded py-2 px-4 font-bold text-dark_grey bg-white mb-3 mr-3 hover:bg-zinc-300">
            {genre}
        </button>
    );
};