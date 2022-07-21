import { Producer } from "../../types/production";

interface Props {
    crew: Producer[]
};

export const ProductionCrew: React.FC<Props> = ({ crew }) => {
    const crewMembers = crew && {
        producers: crew.filter((member: any) => member.job.toLowerCase().includes("producer")),
        director: crew.filter((member: any) => member.job === "Director"),
        writer: crew.filter((member: any) => member.job === "Screenplay"),
    };

    return (
        <>{ crewMembers &&
            <div className="grid grid-cols-3 gap-x-0 gap-y-6 w-4/5">
                <div>
                    <p className="font-bold">{crewMembers.producers[0].name}</p>
                    <p className="text-sm">{crewMembers.producers[0]?.job}</p>
                </div>

                <div>
                    <p className="font-bold">{crewMembers.producers[1]?.name}</p>
                    <p className="text-sm">{crewMembers.producers[1]?.job}</p>
                </div>

                <div>
                    <p className="font-bold">{crewMembers.director[0]?.name}</p>
                    <p className="text-sm">{crewMembers.director[0]?.job}</p>
                </div>
                
                <div>
                    <p className="font-bold">{crewMembers.writer[0]?.name}</p>
                    <p className="text-sm">{crewMembers.writer[0]?.job}</p>
                </div>

                <div>
                    <p className="font-bold">{crewMembers.producers[2]?.name}</p>
                    <p className="text-sm">{crewMembers.producers[2]?.job}</p>
                </div>
            </div>
        }</>
    );
}; 