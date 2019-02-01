import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import SettingsIcon from '@material-ui/icons/Settings';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    maxWidth: '100%',
  },
  day: {
    marginTop: '30px',
    textAlign: 'center',
  }
});

let id = 0;
function createData(name) {
  id += 1;
  return { id, name };
}

class ArtistSelectionTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props,
      day: props.day,
      artists: props.artists,
      data: props.artists.map((artist) => (
        createData(artist)
      )),
    }
  }

  render() {
    const { classes } = this.state.classes;
    const artistData = this.state.data;

    return (
      <Paper className={classes.root}>
        <Typography className={classes.day} color="inherit" variant="h3">
          {this.state.day}
        </Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Artist</TableCell>
              <TableCell align="right">
                <SettingsIcon />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {artistData.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <h4>{row.name}</h4>
                </TableCell>
                <TableCell align="right">
                  TODO: SLIDER FOR SETTINGS
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

ArtistSelectionTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArtistSelectionTable);
