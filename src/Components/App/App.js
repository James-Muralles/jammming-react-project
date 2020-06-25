import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Tracklist from "../Tracklist/Tracklist";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
        id: 1,
        name: "name",
        artist: "artist",
        album: "album"
      },
        {
          id: 2,
          name: "name2",
          artist: "artist2",
          album: "album2"
        }
      ],

      playListName: 'Generic Playlist',
      PlayListTracks: [
        {
          id: 3,
          name: "playlistName1",
          artist: "playlistArtist1",
          album: "playlistAlbum1"
        },

        {
          id: 4,
          name: "playlistName2",
          artist: "playlistArtist2",
          album: "playlistAlbum2"
        }
      ]

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
    let trackUris = this.state.playListTracks.map(track => track.uri);
  }

  search(searchTerm){
    console.log(searchTerm);

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
