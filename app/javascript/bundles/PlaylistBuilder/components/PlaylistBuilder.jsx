/*
 * TODO: Currently this file is only scanned by eslint when running:
 *     ~> eslint . --ext=.js --ext=.jsx
 *
 * => Investigate how to add a configuration to .eslintrc.yml. - TW 01/30/2019
 */
import React, { Component } from 'react';

import axios from 'axios';

import FestivalCardGrid from './FestivalCardGrid';
import ArtistSelection from './ArtistSelection';

class PlaylistBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      festivals: [],
      currentlySelectedFestival: null,
      userName: props.name,
    };
  }

  componentDidMount() {
    const builder = this;
    axios.get('http://localhost:3000/sessions/festivals')
      .then((response) => {
        builder.setState({
          festivals: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  getUserName() {
    return this.state.userName;
  }

  getFestivals() {
    return this.state.festivals;
  }

  setCurrentlySelectedPlaylist(key) {
    this.setState({
      currentlySelectedFestival: key,
    });
  }

  clearCurrentPlaylist() {
    this.setState({
      currentlySelectedFestival: null,
    });
  }

  // TODO: This should post a request to a controller to build the playlist
  //       for the current user given the selected artist preferences. - TW
  submitBuildPlaylistRequest() {
    console.log('test');
  }

  // TODO: Clean-up this method a bit. - TW
  currentlySelectedFestivalIndex() {
    let result;
    const currSelected = this.state.currentlySelectedFestival;

    this.getFestivals().forEach((festival, index) => {
      if (festival.filename === currSelected) {
        result = index;
      }
    });

    return result;
  }

  currentPlaylistJson() {
    return this.state.festivals[this.currentlySelectedFestivalIndex()];
  }

  render() {
    if (this.state.currentlySelectedFestival === null) {
      return (
        <div>
          <FestivalCardGrid builder={this} />
        </div>
      );
    }
    return (
      <div>
        <ArtistSelection builder={this} />
      </div>
    );
  }
}

export default PlaylistBuilder;
