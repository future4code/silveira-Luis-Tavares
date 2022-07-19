interface MovieInfosProps {
    title: string,
    release_year: string,
    brazilCertification: string,
    brazil_release_date: string,
    genres: string,
    duration: string,
    overview: string
};

export function MovieInfos({
    title,
    release_year,
    brazilCertification,
    brazil_release_date,
    genres,
    duration,
    overview
}: MovieInfosProps) {
    return (
        <>
            <div>
                <h2>{title} ({release_year})</h2>

                <p>{brazilCertification} anos ° {brazil_release_date} (BR) ° {genres} ° {duration} </p>

                <p>avaliação dos usuários</p>

                <p>Sinópse</p>
                <p>{overview}</p>
            </div>
        </>
    );
};