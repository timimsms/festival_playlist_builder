import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/ArrowBackIos';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ArtistSelectionAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props,
      userName: props.userName,
      festivalName: props.festivalName,
    };
  }

  render() {
    const { classes } = this.state.classes;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {this.state.festivalName}
            </Typography>
            <Button color="inherit">{this.state.userName}</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ArtistSelectionAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
  festivalName: PropTypes.string.isRequired,
};

export default withStyles(styles)(ArtistSelectionAppBar);
