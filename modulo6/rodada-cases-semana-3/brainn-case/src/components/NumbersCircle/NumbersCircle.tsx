import { CirclesContainer, Circle } from "./styles";

interface Props {
    numbers: number[]
};

export const NumbersCard: React.FC<Props> = ({ numbers }) => {
    return (
        <CirclesContainer>
            {numbers.map(number => (
                <Circle key={number}>
                    {number}
                </Circle>
            ))}
        </CirclesContainer>
    );
};