import { useRequestData } from "../../hooks/useRequestData";

import closeIcon from "../../assets/closeIcon.png";

interface Props {
    selectedGenreId: any,
    setSelectedGenreId: any
}

export const GenreButton: React.FC<Props> = ({
    selectedGenreId, 
    setSelectedGenreId
}) => {
    const genres = useRequestData([], "/genre/movie/list");
    const genresList = genres.data.data && genres.data.data.genres;

    const isGenreSelected = (id: number) => Object.keys(selectedGenreId).find((genre: any) => genre.id === id) ? true : false;

    // ----------- FILTRO NÃO ESTÁ FUNCIONANDO JUNTO COM A MUDANÇA DE ESTILIZAÇÃO DO BOTÃO -----------
    // console.log(Object.keys(selectedGenreId).find((genre: any) => genre.id === 35));
    // console.log(selectedGenreId);
    

    const selectGenre = (genreId: number) => {
        const selectedGenre = {...selectedGenreId, [genreId]: true};

        setSelectedGenreId(selectedGenre);
    };

    const removeGenre = (genreId: number) => {
        const selectedGenre = {...selectedGenreId, [genreId]: false};

        setSelectedGenreId(selectedGenre);
    };

    // console.log(selectedGenreId)

    return (
            <>{ genresList && genresList.map((genre: any) => {
                if (!isGenreSelected(genre.id)) {
                    return (
                        <button className={`rounded py-2 px-4 font-bold text-dark_grey mb-3 mr-3 bg-white hover:bg-orange-100`}
                         onClick={ () => selectGenre(genre.id) }>
                            {genre.name}
                        </button>
                    )
                } else {
                    return (
                        <button className={`flex items-center rounded py-2 px-4 font-bold text-dark_grey mb-3 mr-3 bg-strong_yellow`}>
                            {genre.name}
                            <img className="ml-2"
                             src={closeIcon} onClick={ () => removeGenre(genre.id) }/>
                        </button>
                    )
                };
            }) }</>
    );
};