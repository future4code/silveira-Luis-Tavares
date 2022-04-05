import axios from "axios";
import React from "react";
import styled from "styled-components";

const Input = styled.input`
    margin-right: 10px;
`

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

        axios.post(urlCreateUser, body, this.props.header)
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
            <div>
                <Input placeholder="Nome" value={this.state.inputNome} onChange={this.onChangeNome} />
                <Input placeholder="E-mail" value={this.state.inputEmail} onChange={this.onChangeEmail} />
                
                <button onClick={this.createUser}>Criar Usuário</button>
            </div>
        );
    }
}