import React, { Component } from 'react';

class ArtistSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      builder: props.builder,
    };
  }

  getCurrentPlaylist() {
    return this.state.builder.currentPlaylistJson();
  }

  getCurrentPlaylistName() {
    return this.getCurrentPlaylist().name;
  }

  render() {
    return (
      <div>
        TODO: NEXT STEP - ADD ARTIST SELECTOR
        <br />
        Current playlist:
        &nbsp;
        {this.getCurrentPlaylistName()}
      </div>
    );
  }
}

export default ArtistSelection;
