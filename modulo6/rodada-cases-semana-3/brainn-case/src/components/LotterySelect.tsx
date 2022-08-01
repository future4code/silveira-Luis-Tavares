import { useRequestData } from "../hooks/useRequestData";

export const LotterySelect: React.FC = () => {
    const { data } = useRequestData({}, "/loterias");

    const lotterys = data.data && data.data.map((lottery: any) => {
        return <option>{lottery.nome.toUpperCase()}</option>
    });

    return (
        <select>
            {lotterys}
        </select>
    );
};