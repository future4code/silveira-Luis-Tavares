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

const Input = styled.input`
    margin: 20px 0;
    width: 170px;
`

class PerguntaInput extends React.Component {
    state = {
        valorInput: '',
    }

    onChangeValorInput = (event) => {
        this.setState({valorInput: event.target.value});
    }

    render() {
        return (
            <ContainerPergunta>
                <EstiloLabel> 
                    {this.props.pergunta}
                    <Input type={this.props.tipo} value={this.state.valorInput} onChange={this.onChangeValorInput} />
                </EstiloLabel>
            </ContainerPergunta>
        );
    }
}

export default PerguntaInput;