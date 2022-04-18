import axios from "axios";
import React from "react";
import styled from "styled-components";

const ContainerUsuarios = styled.div`
    display: flex;
    justify-content: center;
`

const Input = styled.input`
    margin-right: 10px;
`

const ContainerBotao = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

const TrocarTela = styled.button`
  padding: 0 15px;
`

const header = {
    headers: {Authorization: "luis-tavares-silveira"}
  }

export class CriarUsuario extends React.Component {
    state = {
        inputNome: "",
        inputEmail: "",
    }

    onChangeNome = (ev) => {
        this.setState({inputNome: ev.target.value});
    }

    onChangeEmail = (ev) => {
        this.setState({inputEmail: ev.target.value});
    }

    createUser = () => {
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        }

        const urlCreateUser = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

        axios.post(urlCreateUser, body, header)
        .then(() => {
            alert("Usuário criado com sucesso!");
            this.setState({
                inputNome: "",
                inputEmail: ""
            });
        }).catch((error) => {
            alert(error);
        })
    }

    render() {

        return (
            <ContainerUsuarios>

                <div>
                    <Input placeholder="Nome" value={this.state.inputNome} onChange={this.onChangeNome} />
                    <Input placeholder="E-mail" value={this.state.inputEmail} onChange={this.onChangeEmail} />
                    <button onClick={this.createUser}>Criar Usuário</button>

                    <ContainerBotao>
                        <TrocarTela onClick={this.props.telaListaUsuarios}>Trocar Tela</TrocarTela>
                    </ContainerBotao>
                </div>

            </ContainerUsuarios>
        );
    }
}