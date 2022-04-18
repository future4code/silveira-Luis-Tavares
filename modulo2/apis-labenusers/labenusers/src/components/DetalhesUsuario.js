import React from "react";
import styled from "styled-components";
import axios from "axios";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ContainerInfoUsuario = styled.p`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-bottom: 5px;
    font-style: italic;
    text-align: center;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    width: 20%;
`

const InfoUsuario = styled.div`
    margin-bottom: 10px;
`

const BotaoVoltar = styled.button`
    padding: 0 15px;
    margin-top: 10px;
`

const header = {
    headers: {Authorization: "luis-tavares-silveira"}
  }

export class DetalhesUsuario extends React.Component {
    state = {
        detalhesUsuario: {},
        editarUsuario: false,
        telaAtual: "detalhesUsuario",
        inputEditNome: "",
        inputEditEmail: ""    
    }

    componentDidMount() {
        this.getUser();
    }

    onChangeEditNome = (ev) => {
        this.setState({inputEditNome: ev.target.value});
    }

    onChangeEditEmail = (ev) => {
        this.setState({inputEditEmail: ev.target.value});
    }

    editarUsuario = () => {
        this.setState({editarUsuario: !this.state.editarUsuario});
    }

    getUser = () => {
        const urlGetUser = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.idUsuario}`

        axios.get(urlGetUser, header)
        .then((res) => {
            this.setState({detalhesUsuario: res.data})
        }).catch((error) => {
            alert(error)
        })
    }

    mudarTela = () => {
        if(this.state.editarUsuario === true) {
            this.setState({editarUsuario: false});
        } else {
            this.setState({editarUsuario: true});
        }
    }

    editUser = () => {
        const urlEditUser = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.idUsuario}`
        const body = {
            name: this.state.inputEditNome,
            email: this.state.inputEditEmail
        }

        axios.put(urlEditUser, body, header)
        .then(() => {
            alert("Usuário editado com sucesso!");
            this.getUser();
            this.mudarTela();
        }).catch((error) => {
            alert(error);
        })
    }

    render() {
        const inputsEdicaoUsuario = this.state.editarUsuario === false ? (

            <div>
                <button onClick={this.editarUsuario}>Editar Usuário</button>
            </div>) : (

            <div>
                <input placeholder="Nome" value={this.state.inputEditNome} onChange={this.onChangeEditNome}/>
                <input placeholder="E-mail" value={this.state.inputEditEmail} onChange={this.onChangeEditEmail}/>
                <button onClick={this.editUser}>Salvar Alterações</button>
            </div>
        )

        return (
            <MainContainer>
                    <ContainerInfoUsuario>
                        <InfoUsuario>{this.state.detalhesUsuario.name}</InfoUsuario>
                        <InfoUsuario>{this.state.detalhesUsuario.email}</InfoUsuario>
                    </ContainerInfoUsuario>

                    {inputsEdicaoUsuario}

                    <hr />

                    <BotaoVoltar onClick={this.props.trocarTela}>Voltar para lista de Usuários</BotaoVoltar>

            </MainContainer>
        )
    }
}