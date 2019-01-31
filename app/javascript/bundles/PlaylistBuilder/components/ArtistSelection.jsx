import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArtistSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      builder: props.builder,
    };
  }

  getCurrentPlaylist() {
    console.log(this.state.builder.currentPlaylistJson());
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
