import React from "react";
import axios from "axios";
import { BASE_URL, HEADER } from "../../constants/inputsAPI";
import { MainPageContainer, TitleContainer, ContainerNewPlaylist, ButtonContainer } from "./styled";
import spotifyIcon from "../../assets/spotify-icon.png";

export class MainPage extends React.Component {
    state = {
        playlistInputValue: "",
    }

    onChangePlaylistInput = (ev) => {
        this.setState({playlistInputValue: ev.target.value});
    }

    createPlaylist = async () => {
        try {
            const body = {
                name: this.state.playlistInputValue
            }

            await axios.post(`${BASE_URL}`, body, HEADER);
            this.setState({playlistInputValue: ""});
            alert("Playlist criada com sucesso!");


        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    render() {
        return (
            <MainPageContainer>
                <TitleContainer>
                    <h1>Labefy</h1>
                    <img src={spotifyIcon} />
                </TitleContainer>

                <ContainerNewPlaylist>
                    <input 
                    placeholder="Nome da nova playlist..."
                    value={this.state.playlistInputValue}
                    onChange={this.onChangePlaylistInput}
                    />
                    <button onClick={this.createPlaylist}>Criar Playlist</button>
                </ContainerNewPlaylist>

                <ButtonContainer>
                    <span onClick={this.props.changeToPlaylists}>Minhas playlists</span>
                </ButtonContainer>
            </MainPageContainer>
        )
    }
}