import React from "react";
import styled from "styled-components";
import PerguntaInput from "./PerguntaInput/PerguntaInput";
import PerguntaSelect from "./PerguntaSelect/PerguntaSelect";

const Titulo = styled.h3`
    font-size: 1.17rem;
    margin: 15px 0;
`

class Etapa3 extends React.Component {
    render() {
        return (
            <>
                <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>

                <PerguntaInput pergunta={"5. Por que você não terminou um curso de graduação?"} />
                <PerguntaSelect pergunta={"6. Você fez algum curso complementar?"}
                    opcoes={[
                        'Nenhum',
                        'Curso técnico',
                        'Curso de inglês'
                    ]}
                />
            </>
        );
    }
}

export default Etapa3;