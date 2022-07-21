interface Member {
    name: string,
    job: string
};
interface ProductionMembersProps {
    members: Array<Member>
};

export const ProductionMembers: React.FC<ProductionMembersProps> = ({members}) => {
    const producers = members.filter((member: Member) => {
        return member.job.toLowerCase().includes("producer");
    }).map((producer: Member) => {
        return {
            name: producer.name,
            job: producer.job
        };
    });

    const director = members.filter((member: Member) => {
        return member.job === "Director"
    }).map((producer: Member) => {
        return {
            name: producer.name,
            job: producer.job
        };
    });

    const writer = members.filter((member: Member) => {
        return member.job === "Screenplay"
    }).map((producer: Member) => {
        return {
            name: producer.name,
            job: producer.job
        };
    });

    const designer = members.filter((member: Member) => {
        return member.job.toLowerCase().includes("costume");
    }).map((producer: Member) => {
        return {
            name: producer.name,
            job: producer.job
        };
    });

    // console.log(producers)


    return (
        <>{ producers && director && writer && designer &&
            <div className="grid grid-cols-3 gap-x-0 gap-y-6 w-4/5">
                <div>
                    <p className="font-bold">{producers[0]?.name}</p>
                    <p className="text-sm">{producers[0]?.job}</p>
                </div>

                <div>
                    <p className="font-bold">{producers[1]?.name}</p>
                    <p className="text-sm">{producers[1]?.job}</p>
                </div>

                <div>
                    <p className="font-bold">{director[0]?.name}</p>
                    <p className="text-sm">{director[0]?.job}</p>
                </div>
                
                <div>
                    <p className="font-bold">{writer[0]?.name}</p>
                    <p className="text-sm">{writer[0]?.job}</p>
                </div>

                <div>
                    <p className="font-bold">{designer[0]?.name}</p>
                    <p className="text-sm">{designer[0]?.job}</p>
                </div>
            </div>
        }</>
    );
}; 