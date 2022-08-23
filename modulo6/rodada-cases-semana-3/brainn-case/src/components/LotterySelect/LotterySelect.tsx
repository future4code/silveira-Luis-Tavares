import { Lottery } from "../../interfaces/Lottery";

interface Props {
    lotterys: Lottery[],
    setCurrentLotteryId: React.Dispatch<React.SetStateAction<number>>
};

export const LotterySelect: React.FC<Props> = ({ lotterys, setCurrentLotteryId }) => {
    const onChangeId = (event: React.ChangeEvent<HTMLSelectElement>) => setCurrentLotteryId(Number(event.target.value));

    const lotterysList = lotterys && lotterys.map((lottery: Lottery) => {
        return (
            <option key={lottery.id} value={lottery.id}>
                {lottery.nome.toUpperCase()}
            </option>
        );
    });

    return (
        <select defaultValue={0} onChange={onChangeId}>
            {lotterysList}
        </select>
    );
};