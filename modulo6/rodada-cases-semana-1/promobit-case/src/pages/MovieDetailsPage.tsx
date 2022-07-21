import { useParams } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";

import { BASE_URL_IMAGE } from "../constants/api";

import { CastCarousel } from "../components/MovieDetailsPage/CastCarousel";
import { Infos } from "../components/MovieDetailsPage/Infos";
import { ProductionCrew } from "../components/MovieDetailsPage/ProductionCrew";
import { Trailer } from "../components/MovieDetailsPage/Trailer";
import { Recommendations } from "../components/MovieDetailsPage/Recommendations";

import { MovieDetails } from "../types/movie";
import { Actor, Producer } from "../types/production";
import { useEffect } from "react";

export const MovieDetailsPage: React.FC = () => {
    const { id } = useParams<string>();

    const { data } = useRequestData({}, `/movie/${id}`);
    const details: MovieDetails = data && data.data;
    
    const production = useRequestData({}, `/movie/${id}/credits`);
    const crew: Producer[] = production.data.data && production.data.data.crew;
    const cast: Actor[] = production.data.data && production.data.data.cast;

    return (
        <main>
            { details && production &&
            <>
                <div className="bg-dark_purple flex justify-center items-center text-white w-screen">
                    <div className="flex w-10/12 relative top-16">

                        <img className="w-96 rounded mr-8"
                        src={`${BASE_URL_IMAGE}${details.poster_path}`}
                        alt={`${details.title} poster`} />

                        <div className="w-3/5 flex flex-col h-fit">
                            <Infos
                            id={id as string}
                            title={details.title}
                            genres={details.genres}
                            runtime={details.runtime}
                            vote_average={details.vote_average}
                            overview={details.overview}
                            />

                            <ProductionCrew crew={ crew } />
                        </div>

                    </div>
                </div>

                <div className="flex flex-col w-10/12 m-auto mt-24">

                    <h3 className="text-3xl text-gray-900 font-bold">
                        Elenco original
                    </h3>
                    <CastCarousel cast={ cast } />

                    <h3 className="text-3xl text-gray-900 font-bold mt-10 mb-6">
                        Trailer
                    </h3>
                    <Trailer id={ id as string } />

                    <h3 className="text-3xl text-gray-900 font-bold mt-10 mb-6">
                        Recomendações
                    </h3>
                    <Recommendations id={ id as string } />

                </div>
                
            </>}
        </main>
    );
};