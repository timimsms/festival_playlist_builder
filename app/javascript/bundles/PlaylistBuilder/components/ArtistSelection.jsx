import React, { Component } from 'react';

import ArtistSelectionAppBar from './ArtistSelectionAppBar';
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

  getCurrentLineupByDay() {
    return this.getCurrentPlaylist().lineup;
  }

  render() {
    var lineup = this.getCurrentLineupByDay();

    return (
      <div>
        <ArtistSelectionAppBar userName={this.state.builder.getUserName()}
                               festivalName={this.getCurrentPlaylistName()}/>
        TODO: NEXT STEP - ADD ARTIST SELECTOR
        <br />
        Current playlist:
        &nbsp;
        {this.getCurrentPlaylistName()}

        {Object.keys(lineup).map((key) => (
          <div key={key}>
            <h1>{key}</h1>
            {lineup[key].map((artist) => (
              <small key={artist}>{artist}&nbsp;</small>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default ArtistSelection;
