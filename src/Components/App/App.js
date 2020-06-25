import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from "../../util/Spotify";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults:[],

      playListName: 'Generic Playlist',
      PlayListTracks: []

    };


    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }


  addTrack(track){
    let tracks = this.state.PlayListTracks;
    if (tracks && tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playListTracks: tracks})
  }

  removeTrack(track){
    let tracks = this.state.PlayListTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({
      PlayListTracks: tracks
    });

  }

  updatePlaylistName(name){
    this.setState({
      playListName: name
    })
  }

  savePlaylist(){
    const trackUris = this.state.playListTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playListName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playListTracks: []
      })
    })
  }

  search(searchTerm){
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({
        searchResults : searchResults
      })
    });

  }



  render(){
    return <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
          <Playlist onSave={this.savePlaylist} onRemove={this.removeTrack}  playListName={this.state.playListName} PlayListTracks={this.state.PlayListTracks} onNameChange={this.updatePlaylistName}/>
        </div>
      </div>
    </div>
  }

}

export default App;