import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";

import { BASE_URL_IMAGE } from "../constants/api";

import { Header } from "../components/Header";
import { MovieCastCarousel } from "../components/MovieCastCarousel";
import { MovieInfos } from "../components/MovieInfos";
import { ProductionMembers } from "../components/ProductionMembers";
import { MovieTrailer } from "../components/MovieTrailer";
import { MovieCard } from "../components/MovieCard";

interface CertificationInfos {
    certification: string,
    release_date: string
};
interface CountryCertification {
    iso_3166_1: string,
    release_dates: CertificationInfos[]
};
interface MovieGenre {
    name: string
};

interface Actor {
    name: string,
    character: string,
    profile_path: string
};

interface Video {
    type: string,
    official: boolean,
    key: string
};

interface TrailerKey {
    trailerKey: string
};

interface Movie {
    id: number,
    poster_path: string,
    title: string,
    release_date: string,
    navigate: NavigateFunction
};

export const MovieDetailsPage: React.FC = () => {
    const { id } = useParams<string>();
    const navigate = useNavigate();

    const details = useRequestData({}, `/movie/${id}`);
    const certification = useRequestData({}, `/movie/${id}/release_dates`);
    const cast = useRequestData({}, `/movie/${id}/credits`);
    const videos = useRequestData({}, `/movie/${id}/videos`);
    const recommendations = useRequestData({}, `/movie/${id}/recommendations`);

    // console.log(recommendations)

    const brazilInfos: CountryCertification[] = certification.data.data && certification.data.data.results.filter((cert: CountryCertification) => {
        return cert.iso_3166_1 === "BR";
    });

    const genres: MovieGenre[] = details.data.data && details.data.data.genres.map((genre: MovieGenre) => {
        return genre.name;
    });

    const movieTrailerKey: TrailerKey = videos.data.data && videos.data.data.results.filter((video: Video) => {
        return video.type === "Trailer" && video.official === true;
    }).map((video: Video) => {
        return {
            trailerKey: video.key
        }
    })[0];

    // console.log(movieTrailer)

    const castList = cast.data.data && cast.data.data.cast.filter((actor: Actor) => {
        return actor.profile_path !== null;
    }).map((actor: Actor) => {
        return (
            <MovieCastCarousel key={actor.name}
             name={actor.name}
             character={actor.character}
             profile_path={actor.profile_path}
            />
        );
    });

    const recommendationList = recommendations.data.data && recommendations.data.data.results.map((movie: Movie) => {
        return (
            <MovieCard key={movie.id}
             id={movie.id}
             poster={movie.poster_path}
             title={movie.title}
             release_date={movie.release_date}
             navigate={navigate}
            />
        );
    }).slice(0, 5);

    const convertMinutesToMovieDurationTime = (min: number): string => {
        const hours = min / 60;
        const intHours = Math.floor(hours);

        const minutes = (hours - intHours) * 60;
        const intMinutes = Math.round(minutes);

        return `${intHours}hr ${intMinutes}m`;
    };

    return (
        <main>
            <Header />

            { details.data.data && cast.data.data && brazilInfos && genres && movieTrailerKey &&
            <>
                <div className="bg-dark_purple flex justify-center items-center text-white w-screen">
                    <div className="flex w-10/12 relative top-16">

                        <img className="w-96 rounded mr-8"
                        src={`${BASE_URL_IMAGE}${details.data.data.poster_path}`}
                        alt={`${details.data.data.title} poster`} />

                        <div className="w-2/5 flex flex-col h-fit">
                            <MovieInfos
                            title={details.data.data.title}
                            release_year={brazilInfos[0].release_dates[0].release_date.split("-").at(0) as string}
                            brazilCertification={brazilInfos[0].release_dates[0].certification}
                            brazil_release_date={brazilInfos[0].release_dates[0].release_date.substring(0, 10).split("-").reverse().join("/")}
                            genres={genres.join(", ")}
                            duration={convertMinutesToMovieDurationTime(details.data.data.runtime)}
                            rating={details.data.data.vote_average}
                            overview={details.data.data.overview}
                            />

                            <ProductionMembers
                            members={cast.data.data.crew}
                            />
                        </div>

                    </div>
                </div>

                <div className="flex flex-col items-center w-10/12 m-auto mt-24">

                    <h3 className="self-start text-3xl text-gray-900 font-bold">Elenco original</h3>
                    <div className="flex items-center h-96 overflow-x-scroll max-w-full cast-scrollbar">
                        {castList}
                    </div>

                    <h3 className="self-start text-3xl text-gray-900 font-bold mt-10">Trailer</h3>
                    <MovieTrailer key={movieTrailerKey.trailerKey} 
                    trailerKey={movieTrailerKey.trailerKey} />

                    <h3 className="self-start text-3xl text-gray-900 font-bold">Recomendações</h3>
                    <div className="flex border justify-between items-center w-full overflow-x-hidden">
                        {recommendationList}
                    </div>
                </div>
                
            </>}
        </main>
    );
};