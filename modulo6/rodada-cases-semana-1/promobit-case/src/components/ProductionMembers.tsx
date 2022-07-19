interface ProductionMembersProps {
    members: Array<any>
};

export function ProductionMembers({
    members
}: ProductionMembersProps) {
    const producers = members.filter((member: any) => {
        return member.job.toLowerCase().includes("producer");
    }).map((producer: any) => {
        return {
            name: producer.name,
            job: producer.job
        };
    });

    const director = members.filter((member: any) => {
        return member.job === "Director"
    }).map((producer: any) => {
        return {
            name: producer.name,
            job: producer.job
        };
    });

    const writer = members.filter((member: any) => {
        return member.job === "Screenplay"
    }).map((producer: any) => {
        return {
            name: producer.name,
            job: producer.job
        };
    });

    const designer = members.filter((member: any) => {
        return member.job.toLowerCase().includes("costume");
    }).map((producer: any) => {
        return {
            name: producer.name,
            job: producer.job
        };
    });


    return (
        <>
            <div>
                <p>{producers[0].name}</p>
                <p>{producers[0].job}</p>
            </div>

            <div>
                <p>{producers[1].name}</p>
                <p>{producers[1].job}</p>
            </div>

            <div>
                <p>{director[0].name}</p>
                <p>{director[0].job}</p>
            </div>
            
            <div>
                <p>{writer[0].name}</p>
                <p>{writer[0].job}</p>
            </div>

            <div>
                <p>{designer[0].name}</p>
                <p>{designer[0].job}</p>
            </div>
        </>
    );
}; 