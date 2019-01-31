import React from 'react';

import { withStyles } from '@material-ui/core/styles';

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
    const localBuilder = this.state.builder;
    const festivals = this.getFestivals();

    return (
      <div>
        <Grid container spacing={24}>
          {festivals.map((festival, i) => (
            <Grid item lg={4} md={6} xs={12} key={`festival-${i}`}>
              <FestivalCard
                filename={festival.filename}
                name={festival.name}
                year={festival.year}
                image={festival.image}
                builder={localBuilder}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(FestivalCardGrid);
