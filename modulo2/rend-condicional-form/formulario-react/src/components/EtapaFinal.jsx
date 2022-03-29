import React from "react";
import styled from "styled-components";

const Titulo = styled.h3`
    font-size: 1.17rem;
    margin: 15px 0;
`

export class EtapaFinal extends React.Component {
    render() {
        return (
            <>
                <Titulo>O FORMULÁRIO ACABOU</Titulo>

                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </>
        );
    }
}

export default EtapaFinal;