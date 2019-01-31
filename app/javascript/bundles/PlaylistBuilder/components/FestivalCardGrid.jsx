import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import FestivalCard from './FestivalCard';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class FestivalCardGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      builder: props.builder,
    };
  }

  getFestivals() {
    return this.state.builder.getFestivals();
  }

  render() {
    const festivals = this.getFestivals();
    return (
      <div>
        <Grid container spacing={24}>
          {festivals.map((festival, i) => (
            <Grid item lg={4} md={6} xs={12} key={"festival-" + i}>
              <FestivalCard
                key={festival.filename}
                name={festival.name}
                year={festival.year}
                image={festival.image}
                lineup={festival.lineup}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

FestivalCardGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  builder: PropTypes.object.isRequired,
};

export default withStyles(styles)(FestivalCardGrid);
