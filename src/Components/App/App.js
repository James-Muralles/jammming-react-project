import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = ({
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


    });






  }

  render(){
    return <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist/>
        </div>
      </div>
    </div>
  }

}

export default App;
