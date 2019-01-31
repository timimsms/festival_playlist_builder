import React, { Component } from 'react';

class ArtistSelection extends React.Component {
  constructor(props) {
    super(props);
    self.state = {
      builder: props.builder,
    };
  }

  getCurrentPlaylist() {
    return this.state.builder.currentPlaylist();
  }

  getCurrentPlaylistName() {
    return this.getCurrentPlaylist().name;
  }

  render() {
    return (
      <div>
        TODO: NEXT STEP - ADD ARTIST SELECTOR

        Current playlist: {this.getCurrentPlaylistName()}
      </div>
    );
  }
}

export default ArtistSelection;
