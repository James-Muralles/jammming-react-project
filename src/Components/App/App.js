import React, {useState} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from "../../util/Spotify";

const App = (props) => {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchResults:[],
  //     playlistName: 'Generic Playlist',
  //     PlayListTracks: []
  //
  //   };

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('Generic Playlist');
  const [PlayListTracks, setPlayListTracks] = useState([]);


  //   this.addTrack = this.addTrack.bind(this);
  //   this.removeTrack = this.removeTrack.bind(this);
  //   this.updatePlaylistName = this.updatePlaylistName.bind(this);
  //   this.savePlaylist = this.savePlaylist.bind(this);
  //   this.search = this.search.bind(this);
  // }


 const addTrack = (track) =>{
    let tracks = PlayListTracks;
    if (tracks && tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    setPlayListTracks(tracks);
    // this.setState({playListTracks: tracks})

  };

  const removeTrack = (track) =>{
    let tracks = PlayListTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    // this.setState({
    //   PlayListTracks: tracks
    // });
    setPlayListTracks(tracks)

  };

  const updatePlaylistName = (name) =>{
    // this.setState({
    //   playlistName: name
    // })

    setPlaylistName(name);
  };

  const savePlaylist = () =>{
    const trackUris = PlayListTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      // this.setState({
      //   playlistName: 'New Playlist',
      //   PlayListTracks: []
      // })
      setPlaylistName('New Playlist');
      setPlayListTracks([]);

    })
  };

  const search = (searchTerm) =>{
    Spotify.search(searchTerm).then(searchResults => {
      // this.setState({
      //   searchResults : searchResults
      // })
      setSearchResults(searchResults);
    });

  };



  // render(){
    return <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          <SearchResults onAdd={addTrack} searchResults={searchResults}/>
          <Playlist onSave={savePlaylist} onRemove={removeTrack}  playlistName={playlistName} PlayListTracks={PlayListTracks} onNameChange={updatePlaylistName}/>
        </div>
      </div>
    </div>
  }

// }

export default App;
