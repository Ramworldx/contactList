import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import callIcon from '../../../assets/call-button-icon.png'
import IconButton from '@material-ui/core/IconButton';
import ModalEx from '../../modalComponent/Modal';
import pencil from '../../../assets/pencil-icon.png'
import AlertDialog from './AlertDialog';

const useStyles = makeStyles({

  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '310px',
    maxWidth: '310px',
    maxHeight: '400px',
    backgroundColor: 'rgb(240, 240, 240)',
    margin: '7px',
  },
  media: {
    margin: '20px 0px 1px 0px',
    height: '10em',
    width: '10em',
    borderRadius: '50%',
  },
  edit: {
    position: 'relative',
  },
  editChildren: {
    position: 'absolute',
    left: '4.6em',
    top: '0.02em',
    height: '1.8em',
    width: '1.8em',
    borderRadius: 300,
  },
  editIcon: {
    position: 'inherit',
    height: '2em',
    width: '2em',
    fontSize: '1rem',
  },
  deleteChildren: {
    position: 'absolute',
    right: '4.6em',
    top: '0.02em',
    height: '1.8em',
    width: '1.8em',
    borderRadius: '50%',
  },
  buttonCall: {
    position: 'relative',
    width: '21em',
    height: '3.4em',
    borderRadius: '5%',
    margin: ' 0% 1.5% 0% 1.5%'
  },
  iconCall: {
    position: 'absolute',
    top: '0em',
    right: '0em',
    width: '100%',
    height: '100%',
    borderRadius: '5%'
  }
})

const MediaCard = (props) => {
  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <div className={classes.edit}>
        <ModalEx edit='edit' id={props.contact.id}>
          <IconButton className={classes.editChildren} >
            <img className={classes.editIcon} alt='edit'
              src={pencil} />
          </IconButton>
        </ModalEx>
        <IconButton className={classes.deleteChildren}>
          <AlertDialog contact={props.contact} className={classes.deleteIcon} alt='delete' />
        </IconButton>
      </div>
      <CardMedia
        className={classes.media}
        image={props.contact.imageURL}
        title='User'
      />
      <CardContent>
        <Typography gutterBottom variant='h4' component='h2'>
          {props.contact.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='medium' color='primary' className={classes.buttonCall}>
          <a href={`tel:${props.contact.number}`}>
            <img src={callIcon} alt='call' className={classes.iconCall} />
          </a>
        </Button>
      </CardActions>
    </Card>

  );
}

export default MediaCard