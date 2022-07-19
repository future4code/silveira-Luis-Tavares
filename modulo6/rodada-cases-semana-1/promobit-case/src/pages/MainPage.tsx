import { MovieGenreButton } from "../components/MovieGenreButton";
import { Header } from "../components/Header";
import { useRequestData } from "../hooks/useRequestData";
import { MovieCard } from "../components/MovieCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function MainPage() {
    const [selectedGenreId, setSelectedGenreId] = useState<{[key: number]: Boolean}>({});

    const genres = useRequestData([], "/genre/movie/list");
    const movies = useRequestData([], "/movie/popular");

    const navigate = useNavigate();

    const genresList = genres.data.data && genres.data.data.genres.map((genre: any) => {
        return (
            <MovieGenreButton
             key={genre.id}
             genreId={genre.id}
             genre={genre.name}
             selectedGenreId={selectedGenreId}
             setSelectedGenreId={setSelectedGenreId}
            />
        );
    });

    const moviesList = movies.data.data && movies.data.data.results.filter((movie: any) => {
        return (
            Object.keys(selectedGenreId).length === 0 || movie.genre_ids.some((id: any) => selectedGenreId[id])
        );
    }).map((movie: any) => {
        return (
                <MovieCard key={movie.id}
                 id={movie.id}
                 poster={movie.poster_path}
                 title={movie.title}
                 release_date={movie.release_date}
                 navigate={navigate}
                />
            );
    });

    return (
        <div className="font-sans text-white w-screen">
            <Header />

            <main className="flex flex-col justify-center items-center bg-dark_purple">
                <h1 className="text-5xl text-center mt-14 font-bold">
                    Milhões de filmes, séries e pesssoas <br /> para descobrir. Explore já.
                </h1>

                <p className="uppercase text-xs font-bold mt-8 p-4">Filtre por:</p>

                <div className="w-3/5 flex flex-wrap justify-center mb-14">
                    {genresList}
                </div>

                <div className="bg-white flex justify-center w-full">
                    <div className="flex flex-wrap justify-center w-4/5 gap-8 m-8">
                        {moviesList}
                    </div>
                </div>

            </main>
        </div>
    );
};