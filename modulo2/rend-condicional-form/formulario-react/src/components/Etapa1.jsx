import React from "react";
import styled from "styled-components";
import PerguntaInput from "./PerguntaInput/PerguntaInput";
import PerguntaSelect from "./PerguntaSelect/PerguntaSelect";

const Titulo = styled.h3`
    font-size: 1.17rem;
    margin: 15px 0;
`

class Etapa1 extends React.Component {
    render() {
        return (
            <>
            <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>

            <PerguntaInput pergunta={"1. Qual seu nome?"} />
            <PerguntaInput tipo="number" pergunta={"2. Qual sua idade?"} />
            <PerguntaInput pergunta={"2. Qual seu email?"} />
            <PerguntaSelect pergunta={"3. Qual sua escolaridade?"}
            opcoes={[
                'Ensino médio incompleto',
                'Ensino médio completo',
                'Ensino superior incompleto',
                'Ensino superior completo'
            ]}
            />

            </>
        );
    }
}

export default Etapa1;