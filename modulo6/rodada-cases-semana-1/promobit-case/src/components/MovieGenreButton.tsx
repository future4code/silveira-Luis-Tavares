interface MovieGenreButtonProps {
    genreId: number,
    genre: string,
    selectedGenreId: Array<number>,
    setSelectedGenreId: any
}

export function MovieGenreButton({ genreId, genre, selectedGenreId, setSelectedGenreId }: MovieGenreButtonProps) {
    const selectGenre = (genreId: number) => {
        const selectedGenre = [...selectedGenreId, genreId];

        setSelectedGenreId(selectedGenre);
    };

    return (
        <button className="border rounded py-2 px-4 font-bold text-dark_grey bg-white mb-3 mr-3 hover:bg-zinc-300"
         onClick={ () => selectGenre(genreId) }
        >
            {genre}
        </button>
    );
};