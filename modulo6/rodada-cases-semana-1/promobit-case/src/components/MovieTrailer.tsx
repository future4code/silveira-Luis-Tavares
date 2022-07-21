interface MovieTrailerProps {
    trailerKey: string
};

export const MovieTrailer: React.FC<MovieTrailerProps> = ({ trailerKey }) => {
    return (
        <iframe width="907" height="510" src={`https://www.youtube.com/embed/${trailerKey}`}
        title="YouTube video player" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        className="self-start mt-6 mb-14"
        />
    );
};