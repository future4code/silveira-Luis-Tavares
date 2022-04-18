import React from "react";
import styled from "styled-components";
import axios from "axios";
import { DetalhesUsuario } from "./DetalhesUsuario";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ContainerLista = styled.div`
    text-align: center;
    margin-bottom: 10px;
`

const Lista = styled.li`
    list-style: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-bottom: 5px;
    text-transform: uppercase;
`

const BotaoEditar = styled.span`
    &:hover {
        cursor: pointer;
        border-bottom: 4px solid black;
    }
`

const BotaoRemover = styled.span`
    margin-left: 10px;
    color: red;

    &:hover {
        cursor: pointer;
        border-bottom: 4px solid black;
    }
`

const Input = styled.input`
    margin: 10px 0;
`

const TrocarTela = styled.button`
  padding: 0 15px;
`

const header = {
    headers: {Authorization: "luis-tavares-silveira"}
  }

export class ListaUsuarios extends React.Component {
    state = {
        listaUsuarios: [],
        inputNomeBusca: "",
        telaAtual: "listaUser",
        idUsuario: ""
    }

    componentDidMount() {
        this.getAllUsers();
    }

    onChangeInputBusca = (ev) => {
        this.setState({inputNomeBusca: ev.target.value})
    }

    onChangeInputEditNome = (ev) => {
        this.setState({inputEditNome: ev.target.value});
    }

    onChangeInputEditEmail = (ev) => {
        this.setState({inputEditEmail: ev.target.value});
    }

    getAllUsers = () => {
        const urlAllUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

        axios.get(urlAllUsers, header)
        .then((response) => {
            this.setState({
                listaUsuarios: response.data
            });
        })
    }

    searchUsers = () => {
        const urlSearchName = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.inputNomeBusca}&email=`;

        axios.get(urlSearchName, header)
        .then((response) => {
            this.setState({listaUsuarios: response.data});
        })
    }

    deleteUsers = (userId) => {
        const urlDelUser = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`

        if(window.confirm("Tem certeza que deseja apagar o usuário?")) {
            axios.delete(urlDelUser, header)
        .then(() => {
            alert("Usuário deletado com sucesso!");
            this.getAllUsers();
        }).catch((error) => {
            alert(error);
        })
        }
    }

    trocarTela = (userId) => {
        if(this.state.telaAtual === "listaUser") {
            this.setState({
                telaAtual: "detalhesUsuario",
                idUsuario: userId
            })
        } else {
            this.setState({
                telaAtual: "listaUser",
                idUsuario: ""
            })
        }
    }
    
    render() {
        const listarTodosUsuarios = this.state.listaUsuarios.map((usuario) => {
            return (
                <div>
                    <Lista key={usuario.id}>
                        <BotaoEditar onClick={() => this.trocarTela(usuario.id)}>{usuario.name}</BotaoEditar>
                        <BotaoRemover onClick={() => this.deleteUsers(usuario.id)}>X</BotaoRemover>
                    </Lista>
                </div>
            );
        })

        return (
            <>
                {this.state.telaAtual === "listaUser" ? (

                    <MainContainer>
                
                        <ContainerLista>
                            {this.state.listaUsuarios.length === 0 && <p>Carregando...</p>}
                            {listarTodosUsuarios}
                        </ContainerLista>
                        <p>Procurar usuário</p>
                        <div>
                            <Input placeholder="Nome exato para busca..." value={this.state.inputNomeBusca} onChange={this.onChangeInputBusca} />
                
                            <button onClick={this.searchUsers}>Buscar</button>
                        </div>
                        <TrocarTela onClick={this.props.telaCriarUsuario}>Trocar Tela</TrocarTela>

                    </MainContainer>) : (

                    <DetalhesUsuario
                    idUsuario={this.state.idUsuario}
                    trocarTela={this.trocarTela}
                    />
                )}
            </>
        );
    }
}