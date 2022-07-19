import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { MovieInfos } from "../components/MovieInfos";
import { ProductionMembers } from "../components/ProductionMembers";
import { BASE_URL_IMAGE } from "../constants/api";
import { useRequestData } from "../hooks/useRequestData";

export function MovieDetailsPage() {
    const { id } = useParams();

    const details = useRequestData({}, `/movie/${id}`);
    const certification = useRequestData({}, `/movie/${id}/release_dates`);
    const cast = useRequestData({}, `/movie/${id}/credits`);

    const brazilInfos = certification.data.data && certification.data.data.results.filter((cert: any) => {
        return cert.iso_3166_1 === "BR";
    });

    const genres = details.data.data && details.data.data.genres.map((genre: any) => {
        return genre.name;
    });

    // console.log(producers)

    const convertMinutesToMovieDurationTime = (min: number) => {
        const hours = min / 60;
        const intHours = Math.floor(hours);

        const minutes = (hours - intHours) * 60;
        const intMinutes = Math.round(minutes);

        return `${intHours}hr ${intMinutes}m`;
    };

    return (
        <main>
            <Header />

            { details.data.data && brazilInfos && genres &&
            <div className="bg-dark_purple flex justify-center items-center text-white absolute w-screen">
                <div className="flex w-fit relative top-16 left-28">
                    <img className="w-96 rounded mr-8"
                    src={`${BASE_URL_IMAGE}${details.data.data.poster_path}`}
                    alt={`${details.data.data.title} poster`} />
                    <div className="w-2/5">
                        <MovieInfos
                         title={details.data.data.title}
                         release_year={brazilInfos[0].release_dates[0].release_date.split("-").at(0)}
                         brazilCertification={brazilInfos[0].release_dates[0].certification}
                         brazil_release_date={brazilInfos[0].release_dates[0].release_date.substring(0, 10).split("-").reverse().join("/")}
                         genres={genres.join(", ")}
                         duration={convertMinutesToMovieDurationTime(details.data.data.runtime)}
                         overview={details.data.data.overview}
                        />
                        <ProductionMembers
                         members={cast.data.data.crew}
                        />
                    </div>
                </div>
            </div>
            }
        </main>
    );
};