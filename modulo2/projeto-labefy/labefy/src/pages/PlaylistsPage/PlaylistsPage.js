import React from "react";
import axios from "axios";
import { BASE_URL, HEADER } from "../../constants/inputsAPI";
import { List, ContainerPlaylistPage, ListContainer } from "./styled";
import { PlaylistDetails } from "../../components/PlaylistDetails/PlaylistDetails";

export class PlaylistsPage extends React.Component {
    state = {
        listOfPlaylists: [],
        currentScreen: "playlist",
        playlistId: "",
        playlistName: ""
    }

    componentDidMount() {
        this.getPlaylists();
    }


    getPlaylists = async () => {
        try {
            const response = await axios.get(`${BASE_URL}`, HEADER);
            this.setState({listOfPlaylists: response.data.result.list});

        } catch (error) {
            alert("Erro ao listar playlists!");
        }
    }

    deletePlaylist = async (playlistId) => {
        try {
            if(window.confirm("Tem certeza que deseja remover a playlist?")) {
                await axios.delete(`${BASE_URL}/${playlistId}`, HEADER);
                this.getPlaylists();
                alert("Playlist removida!");
            }
        } catch (error) {
            alert("Erro ao remover playlist.");
        }
    }

    changeScreen = (playlistId, playlistName) => {
        if(this.state.currentScreen === "playlist") {
            this.setState({
                currentScreen: "details",
                playlistId: playlistId,
                playlistName: playlistName
            });
        } else {
            this.setState({
                currentScreen: "playlist",
                playlistId: "",
                playlistName: ""
            });
        }
    }

    render() {
        const showListOfPlaylists = this.state.listOfPlaylists.map((playlist) => {
            return (
                <List>
                    <li key={playlist.id} onClick={() => this.changeScreen(playlist.id, playlist.name)}>{playlist.name}</li>
                    <button onClick={() => this.deletePlaylist(playlist.id)}>Remover</button>
                </List>
            )
        });

        return (
            <>
                {this.state.currentScreen === "playlist" ? (
                    <ContainerPlaylistPage>
                        
                            <p>Playlists</p>
                            <ListContainer>
                                {this.state.listOfPlaylists.length === 0 && <p>Carregando...</p>}
                                {showListOfPlaylists}
                            </ListContainer>

                        <span onClick={this.props.changeBackToMain}>Voltar</span>

                    </ContainerPlaylistPage>

                ) : (

                    <PlaylistDetails 
                    changeScreen={this.changeScreen}
                    playlistId={this.state.playlistId}
                    playlistName={this.state.playlistName}
                    />
                )}
            </>
        )
    }
}