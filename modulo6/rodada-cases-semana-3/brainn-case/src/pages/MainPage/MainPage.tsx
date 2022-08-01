import { LotterySelect } from "../../components/LotterySelect";

export const MainPage: React.FC = () => {
    return (
        <div>
            <div>
                <LotterySelect />

                <h1>Mega-Sena</h1>
                
                <p>concourse</p>
            </div>

            <div>
                <div />

                <div>Numbers</div>

                <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </div>
        </div>
    );
};