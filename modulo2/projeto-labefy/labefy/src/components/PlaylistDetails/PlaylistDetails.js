import React from "react";
import axios from "axios";
import { BASE_URL, HEADER } from "../../constants/inputsAPI";
import { MapContainer, DetailsContainer, InputsContainer, MusicDetailsContainer, TracksContainer } from "./styled";
import removeIcon from "../../assets/trash-icon.png";

export class PlaylistDetails extends React.Component {
    state = {
        tracks: [],
        inputTrackName: "",
        inputArtistName: "",
        inputTrackUrl: ""
    }

    componentDidMount() {
        this.getPlaylistTracks();
    }

    onChangeInputTrack = (ev) => {
        this.setState({inputTrackName: ev.target.value});
    }

    onChangeInputArtist = (ev) => {
        this.setState({inputArtistName: ev.target.value});
    }

    onChangeInputUrl = (ev) => {
        this.setState({inputTrackUrl: ev.target.value});
    }
    
    getPlaylistTracks = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/${this.props.playlistId}/tracks`, HEADER);
            this.setState({tracks: response.data.result.tracks});

        } catch (error) {
            console.log(error);
        }
    }

    addTrackToPlaylist = async () => {
        try {
            const body = {
                name: this.state.inputTrackName,
                artist: this.state.inputArtistName,
                url: this.state.inputTrackUrl
            }

            await axios.post(`${BASE_URL}/${this.props.playlistId}/tracks`, body, HEADER);
            this.getPlaylistTracks();

        } catch (error) {
            console.log(error);
        }
    }

    removeTrackFromPlaylist = async (trackId) => {
        try {
            if(window.confirm("Tem certeza que deseja remover a música selecionada da playlist?")) {
                await axios.delete
                (`${BASE_URL}/${this.props.playlistId}/tracks/${trackId}`, HEADER);
                this.getPlaylistTracks();
                alert("Música removida.");
            }

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const tracksList = this.state.tracks.map((track) => {
            return (
                <MapContainer>
                    <MusicDetailsContainer>
                        <p>{track.name}</p>
                        <p>{track.artist}</p>
                    </MusicDetailsContainer>

                        <audio controls>
                            <source src={track.url} />
                        </audio>

                        <img onClick={() => this.removeTrackFromPlaylist(track.id)} src={removeIcon} />
                </MapContainer>
            )
        })

        return (
            <DetailsContainer>
                <h3>{this.props.playlistName}</h3>

                    <TracksContainer>
                        {tracksList}
                    </TracksContainer>

                <InputsContainer>
                    <div>
                        <input placeholder="Nome" value={this.state.inputTrackName} onChange={this.onChangeInputTrack}/>
                        <input placeholder="Artista" value={this.state.inputArtistName} onChange={this.onChangeInputArtist}/>
                    </div>
                        
                    <input placeholder="Link" value={this.state.inputTrackUrl} onChange={this.onChangeInputUrl}/>

                    <button onClick={this.addTrackToPlaylist}>Adicionar</button>
                </InputsContainer>
    
                <span onClick={this.props.changeScreen}>Voltar</span>
            </DetailsContainer>
        )
    }
}