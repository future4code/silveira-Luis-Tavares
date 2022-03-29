import React from "react";
import styled from "styled-components";

const ContainerPergunta = styled.div`
    text-align: center;
    font-size: 1rem;
`

const EstiloLabel = styled.label`
display: flex;
flex-direction: column;
align-items: center;
`

const Select = styled.select`
    margin: 20px 0;
`

class PerguntaSelect extends React.Component {
    state = {
        opcoes: [],
    }

    render() {

        const opcoesSelect = this.props.opcoes.map((opcoes, index) => {
            return <option key={index}>{opcoes}</option>
        })

        return (
            <ContainerPergunta>
                <EstiloLabel> {this.props.pergunta}
                <Select>
                    {opcoesSelect}
                </Select>
                </EstiloLabel>
            </ContainerPergunta>
        );
    }
}

export default PerguntaSelect;
