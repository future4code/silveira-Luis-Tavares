import React from "react";
import styled from "styled-components";
import axios from "axios";

const MainContainer = styled.div`
    text-align: center;
`

const Lista = styled.li`
    list-style: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-bottom: 5px;
    text-transform: uppercase;
`

const BotaoLista = styled.span`
    margin-left: 10px;
    color: red;

    &:hover {
        cursor: pointer;
        border-bottom: 4px solid black;
    }
`

const Paragrafo = styled.p`
    text-align: center;
    margin: 10px 0;
`

export class ListaUsuarios extends React.Component {
    state = {
        listaUsuarios: [],
        inputNomeBusca: ""
    }

    listarTodosUsuarios;

    onChangeInputBusca = (ev) => {
        this.setState({inputNomeBusca: ev.target.value})
    }

    getAllUsers = () => {
        const urlAllUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

        axios.get(urlAllUsers, this.props.header)
        .then((response) => {
            this.setState({
                listaUsuarios: response.data
            });
        })
    }

    searchUsers = () => {
        const urlSearchName = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.inputNomeBusca}&email=`;

        axios.get(urlSearchName, this.props.header)
        .then((response) => {
            this.setState({listaUsuarios: response.data});
        })
    }

    deleteUsers = (userId) => {
        const urlDelUser = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`

        if(window.confirm("Tem certeza que deseja apagar o usuário?")) {
            axios.delete(urlDelUser, this.props.header)
        .then(() => {
            alert("Usuário deletado com sucesso!");
            this.getAllUsers();
        }).catch((error) => {
            alert(error)
        })
        }
        
    }

    componentDidMount() {
        this.getAllUsers();
    }
    
    render() {
        const listarTodosUsuarios = this.state.listaUsuarios.map((usuario) => {
            return (
                <div>
                    <Lista key={usuario.id}>
                        <span>{usuario.name}</span>
                        <BotaoLista onClick={() => this.deleteUsers(usuario.id)}>X</BotaoLista>
                    </Lista>
                </div>
            );
        })

        return (
            <div>
                <MainContainer>
                    {this.state.listaUsuarios.length === 0 && <p>Carregando...</p>}
                    {listarTodosUsuarios}
                </MainContainer>

                <hr />

                <div>
                    <Paragrafo>Procurar usuário</Paragrafo>
                    <input placeholder="Nome exato para busca..." value={this.state.inputNomeBusca} onChange={this.onChangeInputBusca} />
                
                    <button onClick={this.searchUsers}>Buscar</button>
                </div>
            </div>
        );
    }
}