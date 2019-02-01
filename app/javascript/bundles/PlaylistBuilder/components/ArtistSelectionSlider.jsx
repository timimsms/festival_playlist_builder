import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: '100%',
  },
  slider: {
    padding: '22px 0px',
  },
};

const valueLabelArray = [ 'None',
                          'Top 5 songs',
                          'Top 10 songs',
                          'All albums',
                          'All songs'
                        ];

class ArtistSelectionSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      value: props.value,
      sliderAction: props.updateRow,
    };
  }

  // TODO: Shouldn't need to do both; but setState is needed to trigger redraw.
  handleChange = (event, value) => {
    this.state.sliderAction(value);
    this.setState({ value });
  };

  getValueLabel() {
    return valueLabelArray[this.state.value];
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    var valueLabel = this.getValueLabel();

    return (
      <div className={classes.root}>
        <h6>{valueLabel}</h6>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          min={0}
          max={4}
          step={1}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

ArtistSelectionSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArtistSelectionSlider);
