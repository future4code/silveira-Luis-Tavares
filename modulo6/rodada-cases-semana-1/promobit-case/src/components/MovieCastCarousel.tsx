import { BASE_URL_IMAGE } from "../constants/api";

interface MovieCastCarouselProps {
    name: string,
    character: string,
    profile_pic: string
};

export function MovieCastCarousel({
    name,
    character,
    profile_pic
}: MovieCastCarouselProps) {
    return (
        <div className="w-44 border">
                <div className="w-full">
                    <img className="w-4/5 mr-40"
                    src={`${BASE_URL_IMAGE}${profile_pic}`} alt={`Foto de ${name}`} />
                </div>

                <p>{name}</p>
                <p>{character}</p>
        </div>
    );
};