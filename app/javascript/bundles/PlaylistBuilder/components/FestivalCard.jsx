import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 300,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
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
      key: props.key,
      name: props.name,
      avatar: props.name.charAt(0),
      year: props.year,
      short_description: props.name + ' - ' + props.year,
      description: null,
      image: props.image,
      lineup: props.lineup
    };
  }

  render() {
    const { classes } = this.props;

    var hasDescriptionContent = this.state.description !== null;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.state.avatar}
            </Avatar>
          }
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
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

FestivalCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FestivalCard);
