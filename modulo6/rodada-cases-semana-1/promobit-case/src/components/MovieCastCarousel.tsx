import { BASE_URL_IMAGE } from "../constants/api";

interface MovieCastCarouselProps {
    name: string,
    character: string,
    profile_path: string
};

export const MovieCastCarousel: React.FC<MovieCastCarouselProps> = ({
    name,
    character,
    profile_path
}) => {
    return (
        <div className="flex flex-col justify-between p-2 mx-2 shadow-[0_4px_4px_0_#00000040]">
                <div className="w-44">
                    <img className="rounded max-w-full"
                    src={`${BASE_URL_IMAGE}${profile_path}`} alt={`Foto de ${name}`} />
                </div>

                <p className="font-bold self-start">{name}</p>
                <p className="text-sm self-start">{character}</p>
        </div>
    );
};