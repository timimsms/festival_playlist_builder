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

import SettingsIcon from '@material-ui/icons/SettingsInputAntenna';

import ArtistSelectionSlider from './ArtistSelectionSlider';

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    maxWidth: '100%',
  },
  day: {
    marginTop: 50,
    paddingTop: 30,
    textAlign: 'center',
    fontFamily: "'Montserrat Alternates', sans-serif",
  },
  sliderCell: {
    width: '65%',
  },
});

let id = 0;
function createData(name, value) {
  id += 1;
  return { id, name, value };
}

class ArtistSelectionTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props,
      day: props.day,
      data: props.artists.map((artist) => (
        createData(artist, 1)
      )),
    };
  }

  updateRow(rowIndex, newValue) {
    // console.log(rowIndex);
    // console.log(this.state.data[]);
    // console.log(newValue);
    const newData = this.state.data;
    const newRowData = this.state.data[rowIndex - 1];

    newRowData.value = newValue;

    newData[rowIndex - 1] = newRowData;
    this.setState({
      data: newData,
    });
  }

  render() {
    const { classes } = this.state.classes;
    const artistData = this.state.data;

    return (
      <Paper className={classes.root}>
        <Typography className={classes.day} color="inherit" variant="h4">
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
            {artistData.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <h3>{row.name}</h3>
                </TableCell>
                <TableCell className={classes.sliderCell} align="right">
                  <ArtistSelectionSlider
                    value={row.value}
                    updateRow={(newValue) => { this.updateRow(row.id, newValue); }}
                  />
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
