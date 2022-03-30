import React from "react";
import styled from "styled-components";

// ---------------- ESTILIZAÇÃO ----------------

const ContainerInput = styled.div`
    display: grid;
    grid-template-columns: 15% 1fr 10%;
`

const ContainerMensagem = styled.div`
    display: flex;
    margin: 20px 15px;
`

const Usuario = styled.p`
    font-weight: bolder;
    margin-right: 10px;
`

const MsgErro = styled.p`
    color: red;
    margin-left: 15px;
`

// ---------------- FUNCIONALIDADES ----------------

export class InputsMensagem extends React.Component {
    state = {
        interface: [
       {
        nomeUsuario: "",
        mensagemUsuario: ""
       }],
        inputNomeUsuario: "",
        inputMensagemUsuario: ""
    }

    onChangeInputNomeUsuario = (event) => {
        this.setState({inputNomeUsuario: event.target.value});
    }

    onChangeInputMsgUsuario = (event) => {
        this.setState({inputMensagemUsuario: event.target.value})
    }

    novaMensagem = () => {
        const novaMsg = {
            nomeUsuario: this.state.inputNomeUsuario,
            mensagemUsuario: this.state.inputMensagemUsuario
        }

        const enviarMensagem = [...this.state.interface];
        enviarMensagem.push(novaMsg);

        this.setState({
            interface: enviarMensagem,
            inputMensagemUsuario: ""
        });
    }

    render() {
        const mensagemEnviada = this.state.interface.map((msg) => {
                if(msg.mensagemUsuario != "") {
                    return (
                    <ContainerMensagem>
                    <Usuario>{msg.nomeUsuario}:</Usuario> <p>{msg.mensagemUsuario}</p>
                    </ContainerMensagem>
                )};
        })

        return (
            <div>
            {mensagemEnviada}
                <ContainerInput>
                <input placeholder="Usuário"  value={this.state.inputNomeUsuario} onChange={this.onChangeInputNomeUsuario} />
                <input placeholder="Mensagem" value={this.state.inputMensagemUsuario} onChange={this.onChangeInputMsgUsuario} />
                <input type="submit" onClick={this.novaMensagem} />
                </ContainerInput>
            </div>
        )
    }
}