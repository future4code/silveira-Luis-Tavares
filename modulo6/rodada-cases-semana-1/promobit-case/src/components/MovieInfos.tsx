import ratingStar from "../assets/estrela.png";

interface MovieInfosProps {
    title: string,
    release_year: string,
    brazilCertification: string,
    brazil_release_date: string,
    genres: string,
    duration: string,
    rating: string,
    overview: string
};

export const MovieInfos: React.FC<MovieInfosProps> = ({
    title,
    release_year,
    brazilCertification,
    brazil_release_date,
    genres,
    duration,
    rating,
    overview
}) => {
    return (
        <>
            <div>
                <h2 className="text-3xl font-semibold">{title} ({release_year})</h2>

                <p className="text-lg my-2">{brazilCertification} anos • {brazil_release_date} (BR) • {genres} • {duration}</p>

                <div className="flex flex-col w-fit items-center mb-6">
                    <img className="w-6"
                    src={ratingStar} alt="Star" />

                    <div>
                        <span className="text-2xl">{rating}</span>
                        <span>/10</span>
                    </div>
                </div>

                <p className="text-xl font-bold">Sinopse</p>
                <p className="mt-2 mb-8">{overview}</p>
            </div>
        </>
    );
};