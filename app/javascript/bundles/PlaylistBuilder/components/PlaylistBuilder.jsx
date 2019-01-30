import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from "@material-ui/core/Button";

class PlaylistBuilder extends Component {
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
