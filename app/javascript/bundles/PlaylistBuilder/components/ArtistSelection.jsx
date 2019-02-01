import React, { Component } from 'react';

import ArtistSelectionAppBar from './ArtistSelectionAppBar';
import ArtistSelectionTable from './ArtistSelectionTable';

function titleCase(str) {
  return str.toLowerCase().split(' ').map((word) => (word.charAt(0).toUpperCase() + word.slice(1))).join(' ');
}

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
    const lineup = this.getCurrentLineupByDay();

    return (
      <div>
        <ArtistSelectionAppBar
          userName={this.state.builder.getUserName()}
          festivalName={this.getCurrentPlaylistName()}
        />
        {Object.keys(lineup).map((key) => (
          <ArtistSelectionTable key={key} day={titleCase(key)} artists={lineup[key]} />
        ))}
      </div>
    );
  }
}

export default ArtistSelection;
