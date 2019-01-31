/*
 * TODO: Currently this file is only scanned by eslint when running:
 *     ~> eslint . --ext=.js --ext=.jsx
 *
 * => Investigate how to add a configuration to .eslintrc.yml. - TW 01/30/2019
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import FestivalCard from './FestivalCard';


class PlaylistBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      festivals: [],
      currently_selected_festival: null,
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

  render() {
    return (
      <div>
        {this.state.festivals.map((festival) => (
          <FestivalCard
            key={festival.filename}
            name={festival.name}
            year={festival.year}
            lineup={festival.lineup}
          />
        ))}
      </div>
    );
  }
}

export default PlaylistBuilder;
