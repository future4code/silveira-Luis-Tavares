import React from "react";
import styled from "styled-components";
import PerguntaInput from "./PerguntaInput/PerguntaInput";

const Titulo = styled.h3`
    font-size: 1.17rem;
    margin: 15px 0;
`

class Etapa2 extends React.Component {
    render() {
        return (
            <>
                <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>

                <PerguntaInput pergunta={"5. Qual curso?"} />
                <PerguntaInput pergunta={"6. Qual a unidade de ensino?"} />
            </>
        );
    }
}

export default Etapa2;