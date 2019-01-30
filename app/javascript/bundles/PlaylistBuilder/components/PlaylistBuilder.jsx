import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from "@material-ui/core/Button";
import axios from 'axios';

class PlaylistBuilder extends Component {
  componentDidMount() {
    axios.get('http://localhost:3000/sessions/festivals')
    .then(response => {
      console.log(response.data)
    })
    .catch(error => console.log(error))
  }

  // TODO: Add component did mount method.
  render () {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default PlaylistBuilder;
