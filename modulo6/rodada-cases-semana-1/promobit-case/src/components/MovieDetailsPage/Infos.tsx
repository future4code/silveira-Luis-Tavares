import ratingStarIcon from "../../assets/ratingStarIcon.png";

import { useRequestData } from "../../hooks/useRequestData";

import { GeneralInfo, InfoByCountry } from "../../types/movie";

interface Props {
    id: string,
    title: string,
    genres: Array<any>,
    runtime: number,
    vote_average: string,
    overview: string
};

export const Infos: React.FC<Props> = ({
    id,
    title,
    genres,
    runtime,
    vote_average,
    overview
}) => {
    const { data } = useRequestData({}, `/movie/${id}/release_dates`);
    const infosList: GeneralInfo[] = data.data && data.data.results;

    const ptbr_infos: InfoByCountry = infosList && infosList.filter((info: GeneralInfo) => {
        return info.iso_3166_1 === "BR" || info;
    })[0].release_dates[0];

    const certification = ptbr_infos && {
        release_year: ptbr_infos.release_date.split("-").at(0),
        classification: ptbr_infos.certification,
        release_date: ptbr_infos.release_date.substring(0, 10).split("-").reverse().join("/"),
    };

    const genresListToString = genres.map((genre: any) => genre.name).join(", ");

    const minToHours = (min: number): string => {
        const hours = min / 60;
        const intHours = Math.floor(hours);

        const minutes = (hours - intHours) * 60;
        const intMinutes = Math.round(minutes);

        return `${intHours}hr ${intMinutes}m`;
    };

    return (
        <>{ data && certification &&
            <div>
                <h2 className="text-3xl font-semibold">{ title } ({ certification.release_year })</h2>

                <p className="text-lg my-2">
                    { typeof certification.classification !== "number" ? "Sem classificação" : `${certification.classification} anos`} • { certification.release_date } (BR) • { genresListToString } • { minToHours(runtime) }
                </p>

                <div className="flex flex-col w-fit items-center mb-6">
                    <img className="w-6" src={ ratingStarIcon } alt="Star" />

                    <div>
                        <span className="text-2xl">{ vote_average }</span>
                        <span>/10</span>
                    </div>
                </div>

                <p className="text-xl font-bold">Sinopse</p>
                <p className="mt-2 mb-8">{ overview }</p>
            </div>
        }</>
    );
};