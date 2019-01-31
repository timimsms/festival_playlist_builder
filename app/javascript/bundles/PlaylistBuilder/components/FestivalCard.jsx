import React from 'react';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import red from '@material-ui/core/colors/red';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

// eslint-disable-next-line no-unused-vars
const styles = (theme) => ({
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 300,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  // TODO: Make this configurable
  avatar: {
    backgroundColor: red[500],
  },
});

/* Adapted from MaterialUI's "Recipe" card.
 * See: https://material-ui.com/demos/cards/
 */
class FestivalCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filename: props.filename,
      name: props.name,
      avatar: props.name.charAt(0),
      year: props.year,
      short_description: `${props.name} - ${props.year}`,
      description: null,
      image: props.image,
      builder: props.builder,
    };
  }

  setAsCurrentPlaylist() {
    this.state.builder.setCurrentlySelectedPlaylist(this.state.filename);
  }

  render() {
    const { classes } = this.props;

    const hasDescriptionContent = this.state.description !== null;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={(
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.state.avatar}
            </Avatar>
          )}
          title={this.state.name}
          subheader={this.state.year}
        />
        <CardMedia
          className={classes.media}
          image={this.state.image}
          title={this.state.short_description}
        />
        {hasDescriptionContent ? (
          <CardContent>
            <Typography component="p">
              {this.state.description}
            </Typography>
          </CardContent>
        ) : (null) }
        <CardActions className={classes.actions} disableActionSpacing>
          <Button
            variant="contained"
            color="primary"
            className={classNames(classes.margin, classes.bootstrapRoot)}
            aria-label="Start"
            onClick={() => { this.setAsCurrentPlaylist(); }}
          >
            <PlayArrowIcon />
            &nbsp;
            Build Playlist
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(FestivalCard);
