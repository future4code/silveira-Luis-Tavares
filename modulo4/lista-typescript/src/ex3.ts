type MovieInfo = {
    name: string,
    releaseYear: number,
    genre: string,
    rate?: number
};

enum Genre {
    ACTION = "Ação",
    DRAMA = "Drama",
    COMEDY = "Comédia",
    ROMANCE = "Romance",
    HORROR = "Terror"
};

const setMovieInfo = (movieName: string, releaseYear: number, movieGenre: string, movieRate?: number): MovieInfo => {
    const infos: MovieInfo = {
        name: movieName,
        releaseYear: releaseYear,
        genre: movieGenre,
        rate: movieRate
    };

    return infos;
};

console.log(setMovieInfo("Django Livre", 2012, "Faroeste/Ação"));
console.log(setMovieInfo("Pulp Fiction", 1994, "Crime/Drama", 100));